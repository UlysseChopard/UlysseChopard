import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-2 left-64 z-10 bg-primary rounded-lg drop-shadow-md"
      id="main-nav"
    >
      <Link href="/">
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
        >
          cursus
        </a>
      </Link>
      <Link href="/software-skills">
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
        >
          software skills
        </a>
      </Link>
      <Link href="/miscellaneous">
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
        >
          miscellaneous
        </a>
      </Link>
    </nav>
  );
}
