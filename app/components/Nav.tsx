import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <header className="flex items-center justify-between py-4 px-8">
      <div className="nav-left flex gap-6">
        <div className="logo max-w-[100px]">
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 text-[14px] items-center h-full">
            <li className="hover:opacity-90">
              <Link href="/">Hem</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/series">Serier</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/movies">Filmer</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/new">Nytt och populärt</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/my-list">Min lista</Link>
            </li>
            <li className="hover:opacity-90">
              <Link href="/browse">Bläddra efter språk</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-right flex gap-6 items-center">
        <div className="search">
          <input type="text" placeholder="Sök" />
        </div>
        <div className="profile max-w-[24px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
}

export default Nav;
