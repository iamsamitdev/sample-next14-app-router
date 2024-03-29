'use client'

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {
    // params: {
    //     id: string;
    // }
}

function Report({}: Props) {

  // อ่าน parameter จาก URL
  const params = useParams(); // อ่าน parameter จาก URL

  // อ่าน query string จาก URL
  const query = useSearchParams(); // get query string from URL

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <Link href="/">&larr; Home</Link>
        <p>Report id: { params.id }</p>
        <p>Query string search: { query.get('search') }</p>
        <p>Query string cat: { query.get('cat') }</p>
      </div>
    </div>
  )
}

export default Report