import useSWR from "swr";
import Api from "@/lib/request";
import api from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const fetcher = (url) => Api.get(url).then((req) => req.data);

export const getLogin = async (email, password) => {
  const response = await Api.post("/login", { email, password });
  return response.data;
};

export const GetApi = (value) => {
  const fetchSaveLists = async () => {
    const response = await Api.get(`/${value}`);
    return response.data;
  };

  return useQuery({
    queryKey: [`${value}`],
    queryFn: fetchSaveLists,
  });
};

export const SavePost = async (id) => {
  const res = await Api.post(`/save/${id}`);
  return res.data;
};
export const DeleteSavePost = async (id) => {
  const res = await Api.delete(`/save/${id}`);
  return res.data;
};
export const DeleteUserPostMutation = async (id) => {
  const res = await Api.delete(`/post/${id}`);
  return res.data;
};
export const CreatePost = async (formData) => {
  const res = await Api.post(`/post/`, formData);
  return res.data;
};
