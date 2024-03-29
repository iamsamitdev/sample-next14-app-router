// tsafce
// tsrfce
import Link from 'next/link'
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center">
    <ul className="flex flex-col space-y-2 items-start text-3xl">
      <li>
        <Link href="/about">About &rarr;</Link>
      </li>
      <li>
        <Link href="/service">Service &rarr;</Link>
      </li>
      <li>
        <Link href="/contact">Contact &rarr;</Link>
      </li>
      <li>
        <Link href="/report/1">Report &rarr;</Link>
      </li>
    </ul>
  </main>
  )
}

export default Home
