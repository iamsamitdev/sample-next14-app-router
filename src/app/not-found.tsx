import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col space-y-4 w-96 text-start">
            404 NotFound Krub...
        </div>
    </div>
  )
}