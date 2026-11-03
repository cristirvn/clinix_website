import { Container } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import { CLINIC } from "@/lib/site";

const PILL =
  "group flex min-h-16 w-full items-center justify-center gap-3 rounded-full px-5 py-3 lg:px-6 text-[1.02rem] font-semibold transition duration-300";

/**
 * Section 2 — the three ways to book, as one white dock resting on the hero's
 * bottom edge (online · WhatsApp · phone). Stacked on phones, one row above.
 */
export function HomeActions({ actions }: { actions: HomeContent["actions"] }) {
  return (
    <div className="relative z-10 -mt-12 sm:-mt-10">
      <Container>
        <nav
          aria-label={actions.label}
          className="mx-auto max-w-5xl rounded-[34px] bg-surface p-2 text-ink shadow-[var(--shadow-soft)] ring-1 ring-line"
        >
          <ul className="grid gap-1.5 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
            <li className="sm:col-span-2 lg:col-span-1">
              <L href="/contact" className={`${PILL} bg-cta text-on-cta hover:brightness-110`}>
                <CalendarIcon />
                {actions.online}
              </L>
            </li>
            <li>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${PILL} hover:bg-bg-alt`}
              >
                <WhatsAppIcon className="text-success" />
                {actions.whatsapp}
              </a>
            </li>
            <li>
              <a href={CLINIC.phoneHref} className={`${PILL} hover:bg-bg-alt`}>
                <PhoneIcon className="text-primary" />
                <span>
                  {actions.call}
                  <span className="ml-2 hidden font-medium text-ink-soft lg:inline">{CLINIC.phone}</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
