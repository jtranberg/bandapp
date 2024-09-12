"use client"; // Mark this component as a client component

import React from 'react';
import Link from 'next/link'; // Import Next.js Link component

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Band App</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/nfts">NFTs</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/merch">Merch</Link>
          </li>
          <li>
            <Link href="/">Chat</Link> {/* Add a chat button that links to the chat page */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
