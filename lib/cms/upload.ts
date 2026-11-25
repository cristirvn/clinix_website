import "server-only";

/**
 * Can /admin upload video files (Vercel Blob)? Connect a Blob store to the
 * project in the Vercel dashboard (Storage → Blob → Connect, PUBLIC access):
 * it sets BLOB_READ_WRITE_TOKEN ("token") or, on OIDC-only stores,
 * BLOB_STORE_ID ("presigned"). Without either, /admin still takes links.
 */
export function uploadMode(): "token" | "presigned" | "none" {
  if (process.env.BLOB_READ_WRITE_TOKEN) return "token";
  if (process.env.BLOB_STORE_ID) return "presigned";
  return "none";
}
