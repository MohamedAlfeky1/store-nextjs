import Link from 'next/link'
import React from 'react'

export default function Heading({ title, link }: { title: string, link?: string }) {
  return (
      <div className="flex items-center justify-between text-2xl font-bold text-gray-800 mb-4">
        {title}
        {link && (
          <Link href={link} className="text-blue-600 hover:underline ml-2 text-xl">
            View All
          </Link>
        )}
      </div>
  )
}
