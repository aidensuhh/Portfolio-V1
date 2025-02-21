import React from 'react'

type headingProps ={ children: React.ReactNode;}

export default function Heading({ children }: headingProps) {
  return (
    <h2 className="text-3xl mb-8 font-bold">{children}</h2>
  )
}
        