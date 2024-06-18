"use client";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../layout";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getLogin } from "@/service/auth";

const Page = () => {
  const router = useRouter();
  const { updateUser } = useContext(Context);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const data = await getLogin(email, password);
      updateUser(data);
      router.push("/");
    } catch (error) {
      setError(error.response.data.error[0].message);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  return (
    <div className="p-6 max-sm:flex-col w-full flex sm:ml-20 justify-center items-center gap-10">
      <div className="flex flex-col max-sm:w-full w-1/4 rounded-md justify-center items-center p-4 bg-card text-copy-secondary sm:mb-20 border border-border">
        <h1 className="text-lg font-bold">Welcome Back</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center sm:mb-20"
        >
          <input
            type="email"
            className="m-2 p-2 rounded-md w-full text-black font-semibold border-border border-2 outline-none"
            placeholder="Enter your email"
            name="email"
            required
          />
          <input
            type="password"
            className="m-2 p-2 rounded-md w-full text-black font-semibold border-border border-2 outline-none"
            placeholder="Enter your password"
            name="password"
            required
          />
          <button
            type="submit"
            className="bg-dark hover:bg-dark-active transition-colors text-dark-text mt-4 w-2/3 rounded-md p-2 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          {error && (
            <p className="text-red-500 mt-2">
              {error || "Login failed. Please try again."}
            </p>
          )}
        </form>
        <span>
          Don't have an account?
          <Link href="/registration" className="text-green-700 pl-2 font-bold">
            Sign-up
          </Link>
        </span>
      </div>
      <div className="mb-10 flex justify-center items-center">
        <img src="/bg.png" alt="" className="w-8/12" />
      </div>
    </div>
  );
};

export default Page;
