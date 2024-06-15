import Api from "@/lib/request";
import React, { useEffect, useState } from "react";
import { getPosts } from "@/service/Post";
import Card from "./Card";

const Posts = ({ search, city, buy, min, max }) => {
  const { posts, error, isLoading } = getPosts(search, city, buy, min, max);
  console.log("this is post", posts);
  if (isLoading) return <dev>Loading...</dev>;
  if (error) return <dev>Post Not Find</dev>;
  return (
    <section className="">
      {posts?.data.map((val, index) => (
        <Card post={val} key={index} />
      ))}
    </section>
  );
};

export default Posts;
