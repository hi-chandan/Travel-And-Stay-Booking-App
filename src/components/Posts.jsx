import React from "react";
import { GetPosts } from "@/service/Post";
import Card from "./Card";
import Map from "./Map";

const Posts = ({ search, city, buy, min, max }) => {
  const { posts, error, isLoading } = GetPosts(search, city, buy, min, max);
  console.log("this is post", posts);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Post Not Find</div>;

  return (
    <section className="flex max-sm:relative bottom-10 sm:pt-[5.3rem]">
      <div className="">
        {posts?.data?.map((val, index) => (
          <Card post={val} key={index} />
        ))}
      </div>
      <div className="max-sm:hidden fixed  right-0 border-2 border-border w-[570px] h-[600px]">
        <Map items={posts?.data} />
      </div>
    </section>
  );
};

export default Posts;
