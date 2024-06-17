import useSWR from "swr";
import Api from "@/lib/request";

const fetcher = (url) => Api.get(url).then((res) => res.data);

export const GetPosts = (search, city, buy, min, max) => {
  const { data, error } = useSWR(
    `/posts?search=${search}&type=${buy}&city=${city}&minPrice=${min}&maxPrice=${max}`,
    fetcher,
  );

  return {
    posts: data,
    isLoading: !error && !data,
    error: error,
  };
};

export const GetPostDetails = (id) => {
  const { data, error } = useSWR(`/post/${id}`, fetcher);
  return {
    post: data,
    isLoading: !error && !data,
    error: error,
  };
};
