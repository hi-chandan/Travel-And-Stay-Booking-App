"use client";
import { GetPostDetails } from "@/service/Post";
import React from "react";
import Image from "next/image";
import Map from "@/components/Map";
import Loading from "@/components/Loading";
const Page = ({ params }) => {
  const { id } = params;
  const { data, error, isLoading } = GetPostDetails(id);
  if (isLoading)
    return (
      <dev className="flex h-40 items-center justify-center">
        <Loading />
      </dev>
    );
  if (error)
    return (
      <dev className="flex items-center h-40 justify-center">cant find</dev>
    );

  return (
    <section className="md:p-10 p-3 text-copy-secondary flex max-md:flex-col gap-4">
      <div className=" text-copy-secondary md:w-7/12 ">
        <div className=" flex gap-4">
          <Image
            width={600}
            height={500}
            src={data.data.image[0].url}
            className="rounded-lg"
          />
          <div className="space-y-4 ">
            <Image
              width={200}
              height={100}
              src={data.data.image[0].url}
              className="rounded-lg"
            />{" "}
            <Image
              width={200}
              height={100}
              src={data.data.image[0].url}
              className="rounded-lg"
            />{" "}
            <Image
              width={200}
              height={100}
              src={data.data.image[0].url}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className=" p-3 text-copy-secondary text-3xl font-bold">
          {data.data.title}
        </div>
        <div className="ml-3 flex text-base gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 fill-light `}
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          {data.data.address}
        </div>
        <div className="p-3">
          <h1 className="bg-light max-md:w-full text-white md:w-32 ml-3  text-center p-2 rounded-lg font-bold text-xl    ">
            ₹{data.data.price}
          </h1>
        </div>
        <div className="text-copy-secondary text-base ml-6">
          {data.data.postDetail.desc}
        </div>
      </div>
      <div className="sm:border-l-2 border-border p-2">
        <h1 className="font-bold text-xl text-light">General</h1>
        <div className="flex flex-col gap-8 justify-around md:w-[28rem] p-2">
          <div className="flex justify-around p-2">
            <div className="text-center border-2 border-border  w-28 rounded-lg">
              <h1 className="font-bold ">Utilities</h1>
              <h1 className="text-md font-extralight">
                {data.data.postDetail.utilities}
              </h1>
            </div>
            <div className="text-center border-2 border-border w-28 rounded-lg">
              <h1 className="font-bold">Pet Policy</h1>
              <p className="text-md font-extralight">
                {" "}
                {data.data.postDetail.pet}
              </p>
            </div>
          </div>
          <div className=" flex justify-around">
            <div className="text-center border-2 border-border  w-28 rounded-lg">
              <h1 className="font-bold ">Size</h1>
              <h1 className="text-md font-extralight">
                {data.data.postDetail.size}
              </h1>
            </div>
            <div className="text-center border-2 border-border  w-28 rounded-lg">
              <h1 className="font-bold ">bedroom</h1>
              <h1 className="text-md font-extralight">{data.data.bedroom}</h1>
            </div>
            <div className="text-center border-2 border-border  w-28 rounded-lg">
              <h1 className="font-bold ">bathroom</h1>
              <h1 className="text-md font-extralight">{data.data.bathroom}</h1>
            </div>
          </div>
          <div className="w-[28rem] rounded-lg overflow-hidden  h-[24rem]">
            <Map items={data.data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
