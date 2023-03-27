import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "./CardBlog.module.css"

export default function CardBlog({data}) {
    const router = useRouter()
    console.log(data);
  return (
    <article className={styles.cardBlog}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <Link href={`${router.asPath}/${data.id}`}>Lire cet article</Link>
    </article>
  )
}
