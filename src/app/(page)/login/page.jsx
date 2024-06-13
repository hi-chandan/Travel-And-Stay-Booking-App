"use client";
import { useContext, useState } from "react";
import { Context } from "../../layout";
import { useRouter } from "next/navigation";
import Api from "@/lib/request";
import Link from "next/link";
const Page = () => {
  const router = useRouter();
  const [validation, setValidation] = useState();
  const [userError, setUserError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setUserError("");
    setValidation("");
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
    try {
      const res = await Api.post("/login", {
        email,
        password,
      });
      updateUser(res.data);
      router.push("/");
    } catch (err) {
      console.log("This is error", err);
      setValidation(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" h-screen max-sm:flex-col  w-full flex sm:ml-20 justify-center items-center gap-10    ">
      <div className="flex flex-col max-sm:w-full  w-1/4  rounded-md justify-center items-center p-4 bg-card text-copy-secondary  sm:mb-20  border  border-border  ">
        <h1 className="text-lg font-bold">Welcome Back </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center sm:mb-20  "
        >
          <input
            type="text"
            className="m-2 p-2 rounded-md w-full text-black font-semibold border-border border-2 outline-none"
            placeholder="Enter you email"
            name="email"
          />
          <input
            type="text"
            className="m-2 p-2  rounded-md w-full text-black font-semibold border-border border-2 outline-none"
            placeholder="Enter you password"
            name="password"
          />
          <button className="bg-dark hover:bg-dark-active transition-colors   text-dark-text mt-4 w-2/3 rounded-md p-2 font-semibold">
            Login
          </button>
          {/* <Link></Link> */}
        </form>
        <span>
          Don't have an account?
          <Link
            href={"/registration"}
            className="text-green-700 pl-2 font-bold"
          >
            Signup
          </Link>
        </span>
      </div>
      <div className=" mb-10 flex justify-center items-center ">
        <img src="/bg.png" alt="" className="  w-8/12" />
      </div>
    </div>
  );
};

export default Page;
