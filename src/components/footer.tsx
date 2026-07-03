"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { TbBrandGithubFilled, TbBrandDiscord, TbBrandX } from "react-icons/tb";
import packageinfo from "@/../package.json";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

const GITHUB_URL = "https://github.com/monitry-ltd/";
const MONITRY_LINK = "https://monitry.net";

const footerLinks = {
  product: [
    { name: "Monitry", href: "https://monitry.net", external: false },
    { name: "Pricing", href: `${MONITRY_LINK}/pricing`, external: false },
    {
      name: "Demo",
      href: `https://demo.monitry.net`,
      external: true,
    },
    {
      name: "Self-hosting",
      href: "/docs/self-hosting",
      external: true,
      disabled: true,
    },
  ],
  developers: [
    {
      name: "Documentation",
      href: "https://docs.monitry.net",
      external: true,
      disabled: true,
    },
    { name: "GitHub", href: GITHUB_URL, external: true },
  ],
  community: [
    { name: "Discord", href: "https://discord.gg/UFPNjVPxgg", external: true },
    {
      name: "X / Twitter",
      href: "https://x.com/Monitry_Ltd",
      external: true,
    },
    { name: "Support", href: "/support", external: true },
  ],
  legal: [
    { name: "Privacy policy", href: `${MONITRY_LINK}/legal/privacy-policy` },
    {
      name: "Terms of service",
      href: `${MONITRY_LINK}/legal/terms-of-service`,
    },
  ],
};

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
};

function FooterLink({ link }: { link: FooterLink }) {
  if (link.disabled) {
    return (
      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground/35 cursor-not-allowed select-none">
        {link.name}
      </span>
    );
  }

  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      {link.name}
      {link.external && <ExternalLink className="h-3 w-3" />}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                src="https://cdn.monitry.net/u/Monitry%20Logo%20White.png"
                alt="Monitry"
              />
              <span className="text-base font-semibold text-foreground">
                Monitry
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Professional status monitoring for modern teams. Keep your users
              informed with real-time updates and beautiful status pages.
            </p>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TbBrandGithubFilled className="h-4 w-4" />
              Star on GitHub
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Product
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Developers
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Community
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-foreground">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Feedbase. MIT licensed.
            </p>
            <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
              {`v${packageinfo.version}`}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Monitry LTD.{" "}
              <a href="https://find-and-update.company-information.service.gov.uk/company/16977081">
                Company no. 16977081
              </a>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="https://discord.gg/nkKUWWWDkt"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Discord"
            >
              <FaDiscord className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/feedbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X / Twitter"
            >
              <TbBrandX className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/breadddevv/feedbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <TbBrandGithubFilled className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
