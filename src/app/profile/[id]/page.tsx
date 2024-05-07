import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile ID?',
  }

  export default function Page({ params }: { params: { id: string } }) {
    return <div>Profile: {params.id}</div>
  }

  