import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/users"}>Users</Link>
    </nav>
  )
}
