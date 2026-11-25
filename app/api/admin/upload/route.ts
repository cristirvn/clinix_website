import { handleUpload, handleUploadPresigned, type HandleUploadBody } from "@vercel/blob/client";
import { issueSignedToken } from "@vercel/blob";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/cms/auth";
import { MAX_VIDEO_BYTES, VIDEO_UPLOAD_TYPES } from "@/lib/cms/types";
import { uploadMode } from "@/lib/cms/upload";

/**
 * /admin video uploads go straight from the browser to Vercel Blob (files are
 * far bigger than a function request may be); this route only hands out a
 * short-lived permission for ONE video file, and only to a logged-in admin.
 *
 *  - "token" mode: the store's BLOB_READ_WRITE_TOKEN signs a client token.
 *  - "presigned" mode: stores connected with OIDC (BLOB_STORE_ID, no token)
 *    get a presigned upload URL instead.
 *
 * No upload-completed callback is used: the browser gets the file's URL back
 * and saves it in the testimonial / video slot through the normal admin action.
 */
const PATH = /^video\/[a-z0-9][a-z0-9-]{0,80}\.(mp4|mov|webm|m4v)$/;

function check(pathname: string) {
  if (!PATH.test(pathname)) throw new Error("Invalid file name");
}

export async function POST(request: Request): Promise<NextResponse> {
  if (!(await isAdmin())) return NextResponse.json({ error: "Sesiunea a expirat. Intră din nou în cont." }, { status: 401 });
  const mode = uploadMode();
  if (mode === "none") return NextResponse.json({ error: "Încărcarea de fișiere nu este configurată pe server." }, { status: 503 });

  const body = (await request.json()) as HandleUploadBody & { type: string };
  try {
    if (mode === "token") {
      const result = await handleUpload({
        body,
        request,
        onBeforeGenerateToken: async (pathname) => {
          check(pathname);
          return {
            allowedContentTypes: VIDEO_UPLOAD_TYPES,
            maximumSizeInBytes: MAX_VIDEO_BYTES,
            addRandomSuffix: true,
            validUntil: Date.now() + 2 * 60 * 60 * 1000,
          };
        },
      });
      return NextResponse.json(result);
    }

    const result = await handleUploadPresigned({
      // Only checked for upload-completed callbacks, which this route never asks for.
      webhookPublicKey: process.env.BLOB_WEBHOOK_PUBLIC_KEY ?? "unused",
      body: body as Parameters<typeof handleUploadPresigned>[0]["body"],
      request,
      getSignedToken: async (pathname) => {
        check(pathname);
        const validUntil = Date.now() + 2 * 60 * 60 * 1000;
        const token = await issueSignedToken({
          pathname,
          operations: ["put"],
          allowedContentTypes: VIDEO_UPLOAD_TYPES,
          maximumSizeInBytes: MAX_VIDEO_BYTES,
          validUntil,
        });
        return { token, urlOptions: { addRandomSuffix: true, allowedContentTypes: VIDEO_UPLOAD_TYPES, maximumSizeInBytes: MAX_VIDEO_BYTES, validUntil } };
      },
    });
    return NextResponse.json(result);
  } catch (err) {
    console.error("[admin upload]", err);
    return NextResponse.json({ error: "Nu am putut pregăti încărcarea. Încearcă din nou." }, { status: 400 });
  }
}
