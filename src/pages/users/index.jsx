import React from "react";
import { GetStaticProps } from "next";
import styles from "./List.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
export default function List(props) {
  console.log(props.data);
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className={styles.listContainer}>
      <h1>Liste des utilisateurs</h1>
      <main>
        {props.data.map((user) => (
          <article key={user.id} className={styles.listCard}>
            <h2>{user.username}</h2>
            <Link href={`${router.asPath}/${user.id}`}>Contacter</Link>
          </article>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}
