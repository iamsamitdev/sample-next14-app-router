import Link from 'next/link'
import React from 'react'

type Props = {}

function Service({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
    <div className="flex flex-col space-y-4 w-96 text-start">
      <Link href="/">&larr; Home</Link>
      <h1 className="text-4xl">Service</h1>
      <p>This is the service page</p>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem eius
        voluptatum quo fuga necessitatibus vitae repellendus officiis beatae
        voluptas?
      </p>
    </div>
  </div>
  )
}

export default Service