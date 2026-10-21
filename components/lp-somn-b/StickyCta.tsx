import { ButtonLink } from "@/components/ui/primitives";

/** Mobile-only sticky "Apply" bar at the bottom of the case-study page. Pair with bottom padding on the page. */
export function StickyCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <ButtonLink href={href} size="lg" className="w-full">
        {label}
      </ButtonLink>
    </div>
  );
}
