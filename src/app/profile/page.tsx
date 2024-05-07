import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Profile',
  }

  export default function Page() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Link href="/">Go Home</Link>
      </div>
    );
  }

  