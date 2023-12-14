// pages/index.tsx
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './component/navbarhome';
import React from 'react';

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h1>Welcome to My Next.js App</h1>
    </div>
  );
};

export default HomePage;