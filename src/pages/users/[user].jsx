import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
export default function userPage(props) {
  console.log(props.user);
  return (
    <div>
      <div>
      <h1>{props.user.name}</h1>
        <span>UserName: {props.user.username}</span>
      </div>
      <ul>
        <li>UserName: {props.user.username}</li>
        <li>Email: {props.user.email}</li>
        <li>Website: {props.user.website}</li>
        <li>Phone: {props.user.website}</li>
      </ul>

    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return {
    props: {
      user,
    },
  };
}
export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await data.json();
  const paths = users.map((item) => ({
    params: { user: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
