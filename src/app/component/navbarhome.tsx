// components/Navbar.tsx
"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="auth/login">
            Login
          </Link>
        </li>
        <li>
          <Link href="auth/registration">
            Registration
          </Link>
        </li>
        <li>
          <Link href="salesChannel">
            Sales Channel
          </Link>
        </li>
        <li>
          <Link href="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;