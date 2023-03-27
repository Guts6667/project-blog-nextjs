import React from "react";
import Link from "next/link";
import styles from "./CardHome.module.css";
export default function CardHome({ data }) {
  return (
    <article className={styles.card}>
      <div>
        <h2>{data.title}</h2>
        <span>{data.description}</span>
      </div>
      <p>{data.content}</p>
      <Link href={data.link}>{data.linkText}</Link>
    </article>
  );
}
