import Link from "next/link";
import Logo from "../public/assests/demotest.svg";
import UK from "../public/assests/uk.svg";
import { Button } from "./Button";

const NAV_LINKS = [
  { name: "How it works", href: "#how-it-works" },
  { name: "All apps", href: "#all-apps" },
  { name: "Pricing", href: "#pricing" },
  { name: "For Teams", href: "#teams" },
  { name: "Blog", href: "#blog" },
  { name: "Podcast", href: "#podcast" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-setapp-dark">
      <div className="mx-auto max-w-[1440px] py-[17px] px-5 lg:px-10">
        <div className="flex h-[40px] items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo width="20" height="32" />
          </Link>

          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7.5 px-7.5">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/90 transition-colors font-medium text-[14px] leading-[25.76px] tracking-[0.9px] align-middle"
                >
                  {item.name}
                </Link>
              ))}
              <span className="h-5 w-px bg-white"></span>
              <UK />
              <Link
                href="#signin"
                className="text-white hover:text-white/90 transition-colors font-medium text-[14px] leading-[25.76px] tracking-[0.9px] align-middle"
              >
                Sign In
              </Link>
            </nav>

            {/* CTA Button */}
            <Button variant="outline">Try free</Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
