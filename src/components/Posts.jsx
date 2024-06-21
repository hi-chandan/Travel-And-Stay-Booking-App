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
  if (error)
    return (
      <div className="flex flex-col sm:h-80 max-sm:h-70 w-full justify-center items-center text-lg text-red-700">
        Can't Find Post
      </div>
    );

  return (
    <section className="flex  overflow-hidden bottom-10   sm:pt-[5.3rem]">
      <div className=" md:overflow-auto  md:h-[calc(100vh-9rem)]  ">
        {posts?.data.map((val, index) => (
          <Card post={val} key={index} />
        ))}
      </div>
      <div className="max-xl:hidden fixed rounded-md overflow-hidden  right-0 border-2 border-border w-[35rem] h-[calc(100vh-9rem)]">
        <Map items={posts?.data} />
      </div>
    </section>
  );
};

export default Posts;
