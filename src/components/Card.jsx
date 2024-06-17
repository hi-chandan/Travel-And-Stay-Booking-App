import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ post }) => {
  return (
    <section className="  flex w-screen     sm:pl-20   ">
      <div className="flex max-sm:pl-9   max-sm:flex-col max-sm:w-full w-11/12   ">
        <Link
          className="hover:border-border hover:border-2 m-1 rounded-md "
          href={`/postdetails/${post.id}`}
        >
          <div className="border-border   border-b-2 flex justify-center items-center max-sm:flex-col gap-2 p-2  ">
            <div className="p-2">
              <Image
                className="rounded-md object-contain"
                width={400}
                height={300}
                alt="Image loading problem."
                src={post.image[0]?.url}
              ></Image>
            </div>
            <div className=" max-sm:flex max-sm:flex-col justify-center items-center  max-sm:text-center w-[25rem] pt-4 sm:space-y-6 max-sm:space-x-3">
              <h1 className="text-xl font-bold ">{post.title}</h1>
              <div className=" flex  max-sm:p-6 gap-4 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 fill-light `}
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </div>
                <h1 className="  text-copy-secondary text-md w-full ">
                  {post.address}
                </h1>
              </div>
              <h1 className="bg-light text-white w-20  text-center p-2 rounded-lg font-bold text-xl max-sm:w-8/12    ">
                ₹{post.price}
              </h1>
              <div className=" flex gap-8 pt-4 font-semibold font-mono ">
                <h1 className=" flex gap-2 border-2 border-border p-1 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-green-600"
                    viewBox="0 0 640 512"
                  >
                    <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                  </svg>
                  {post.bedroom} bedroom
                </h1>
                <h1 className="border-2 flex gap-2 border-border p-1 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-green-600"
                    viewBox="0 0 512 512"
                  >
                    <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                  </svg>
                  {post.bathroom} bathroom
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="bg-green-600 w-5/12">dslfj</div> */}
    </section>
  );
};

export default Card;
