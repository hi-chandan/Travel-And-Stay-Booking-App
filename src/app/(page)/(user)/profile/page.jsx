"use client";

import Api from "@/lib/request";
import { Profile, UserPost as fetchUserPost } from "@/service/auth";
import React, { useEffect } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";
import Card from "@/components/Card";

const Page = () => {
  const { data, error, isLoading } = Profile();
  const { UserPost, userisLoading, usererror } = fetchUserPost();
  if (isLoading)
    return (
      <dev className="text-copy-secondary  flex justify-center items-center p-10">
        <Loading />
      </dev>
    );
  if (error) return <dev>Profile not found</dev>;
  if (userisLoading) return <dev>Loading...</dev>;
  if (usererror) return <dev>No post yet</dev>;

  return (
    <section className="p-10 text-copy-secondary overflow-y-scroll flex justify-center items-center ">
      <div className="w-8/12 space-y-3 ">
        <h1 className="text-3xl text-light font-bold">
          Welcome {data.data.name}
        </h1>
        <div className="flex items-center gap-4">
          <p className="font-bold text-lg">Avatar :</p>
          {data.data.avatar ? (
            <Image src={data.data.avatar} width={100} alt="Not Provide" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 fill-copy-primary border-2  p-2 rounded-full  border-border"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          )}
        </div>
        <div className="flex gap-4 font-bold text-lg">
          <p>Name :</p>
          <p>{data.data.name}</p>
        </div>
        <div className="flex gap-4 font-bold  text-lg">
          <p>Email :</p>
          <p>{data.data.email}</p>
        </div>
        <div className="flex gap-4 font-bold  text-lg">
          <button className="bg-light  p-2 rounded-md">Logout</button>
        </div>
        <div className=" pt-10">
          <p className="text-2xl font-bold ">Listed Post</p>
          <div className=" ">
            {UserPost?.data.map((val, index) => (
              <Card post={val} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
