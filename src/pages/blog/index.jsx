import React from "react";
import { GetStaticProps } from "next";
import CardBlog from "@/Components/CardBlog";
import styles from "./Blog.module.css"
export default function Blog(props) {
  // console.log(props.data)
  const data = props.data;
  console.log(data);
  return (
    <div className={styles.container__blog}>
      <h1>Bienvenue sur le Blog</h1>
      <main className={styles.blog__wrapper}>
        {data.map((item) => {
          return <CardBlog key={item.id} data={item} />;
        })}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data)
  return {
    props: {
      data,
    },
    revalidate:20,
  };
}


