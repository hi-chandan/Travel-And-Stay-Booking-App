"use client";
import Api from "@/lib/request";
import { CreatePost } from "@/service/auth";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const createPostMutation = useMutation({
    mutationFn: async (formData) => {
      const data = await CreatePost(formData);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Post is Created");
      router.push("/");
      queryClient.invalidateQueries(["posts"]);
    },
    onError: (error) => {
      toast.error("Post has Error");
    },
  });
  const error = createPostMutation.error?.response?.data?.errorObj || {};
  console.log("This is createPostMutation error", error);
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("file", file);

    createPostMutation.mutate(formData);
  };

  return (
    <section className="text-copy-secondary  flex justify-around items-center ">
      <div className="  flex justify-around max-md:flex-col  gap-6 pt-8 ">
        <div className="formContainer  ">
          <h1>Add New Post</h1>
          <div className="wrapper">
            <form
              onSubmit={handleSubmit}
              className="grid  gap-6 max-md:grid-cols-2  md:grid-cols-3"
            >
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="title">Title</label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                  placeholder="Enter the Title "
                />
                <p className="text-red-600">{error && error.title}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.price}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.address}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="desc">Description</label>
                <input
                  id="desc"
                  type="text"
                  name="desc"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.desc}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.city}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="bedroom">Bedroom Number</label>
                <input
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.bedroom}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="bathroom">Bathroom Number</label>
                <input
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.bathroom}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="latitude">Latitude</label>
                <input
                  id="latitude"
                  name="latitude"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.latitude}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="longitude">Longitude</label>
                <input
                  id="longitude"
                  name="longitude"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.longitude}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                >
                  <option value="Rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
                <p className="text-red-600">{error && error.type}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="type">Property</label>
                <select
                  name="property"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                >
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Condo">Condo</option>
                  <option value="Land">Land</option>
                </select>
                <p className="text-red-600">{error && error.property}</p>
              </div>

              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="utilities">Utilities Policy</label>
                <select
                  name="utilities"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                >
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
                <p className="text-red-600">{error && error.utilities}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="pet">Pet Policy</label>
                <select
                  name="pet"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                >
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
                <p className="text-red-600">{error && error.pet}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="income">Income Policy</label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Income Policy"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.income}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="size">Total Size (sqft)</label>
                <input
                  min={0}
                  id="size"
                  name="size"
                  type="text"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.size}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="school">School</label>
                <input
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.school}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="bus">bus</label>
                <input
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                />
                <p className="text-red-600">{error && error.bus}</p>
              </div>
              <div className="flex flex-col w-52 gap-2 ">
                <label htmlFor="restaurant">Restaurant</label>
                <input
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  className="p-2 rounded-md border-border border-2 outline-none bg-background"
                  type="number"
                />
                <p className="text-red-600">{error && error.restaurant}</p>
              </div>
              <button className="p-2 bg-light rounded-md font-bold text-center ">
                Add
              </button>
            </form>
          </div>
        </div>

        <div className="   ">
          <div className="flex flex-col gap-6 justify-center items-center  h-full">
            <img src={preview} alt="" className="w-96  rounded-lg" />
            <input
              type="file"
              id="file-upload"
              className=""
              multiple
              style={{ display: "none" }}
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              for="file-upload"
              className="bg-light p-3 font-bold  rounded-lg "
            >
              Upload file
            </label>
            <p className="text-red-600">{error && error.image}</p>
          </div>
          {/* <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        /> */}
        </div>
      </div>
    </section>
  );
};

export default Page;
