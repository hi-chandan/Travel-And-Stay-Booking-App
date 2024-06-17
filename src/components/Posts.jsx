import React from "react";
import { GetPosts } from "@/service/Post";
import Card from "./Card";
import Map from "./Map";
import Loading from "./Loading";

const Posts = ({ search, city, buy, min, max }) => {
  const { posts, error, isLoading } = GetPosts(search, city, buy, min, max);
  console.log("this is post", posts);
  if (isLoading)
    return (
      <div className="flex flex-col sm:h-80 max-sm:h-70 w-full justify-center items-center text-lg text-red-700">
        <Loading />
      </div>
    );
  if (error) return <div>Post Not Find</div>;

  return (
    <section className="flex max-sm:relative bottom-10 sm:pt-[5.3rem]">
      <div className="">
        {posts.data.map((val, index) => (
          <Card post={val} key={index} />
        ))}
      </div>
      <div className="max-xl:hidden fixed rounded-md overflow-hidden  right-0 border-2 border-border w-[35rem] h-[35.5rem]">
        <Map items={posts?.data} />
      </div>
    </section>
  );
};

export default Posts;
