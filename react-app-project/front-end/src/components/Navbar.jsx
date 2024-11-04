import React from 'react'

export const Navbar = () => {
  return (
    <nav style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',margin: '30px'}}>
      <a href="/">Home</a>
      <a href="/arrays">Arrays</a>
      <a href="/table">Table</a>
      <a href="/effect">Hooks</a>
    </nav>
  )
}

