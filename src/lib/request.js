import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (config) => {
    return config;
  },

  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 403 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await api.get("/refresh", {
          withCredentials: true,
        });

        return api.request(originalRequest);
      } catch (err) {
        window.location.href = "/login";
        window.localStorage.removeItem("user");
      }
    }

    throw error;
  },
);

export default api;
