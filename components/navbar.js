import React from 'react'
import Logo from './logo'

export default function Navbar() {
  return (
    <>
    <nav className="p-4">
      <Logo className="w-44 h-full ml-4"></Logo>
    </nav>
    <style jsx>{`
      nav {
        position: sticky;
        background-color: rgba(255, 255, 255, 0.72);  
        backdrop-filter: blur(15px);
        top: 0;
        width: 100%;
        z-index: 15;
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.34);
      }
    `}</style>
    </>
  )
}
