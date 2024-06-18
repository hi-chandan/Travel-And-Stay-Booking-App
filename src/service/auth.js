import useSWR from "swr";
import Api from "@/lib/request";

const fetcher = (url) => Api.get(url).then((req) => req.data);

export const getLogin = async (email, password) => {
  const response = await Api.post("/login", { email, password });
  return response.data;
};

export const Profile = () => {
  const { data, error } = useSWR(`/profile`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
};
export const UserPost = () => {
  const { data, error } = useSWR(`/userposts`, fetcher);
  return {
    UserPost: data,
    UserLoading: !error && !data,
    UserError: error,
  };
};
