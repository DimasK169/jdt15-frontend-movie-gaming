import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig: any) => {
  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTFmZWI1MzY5MWZhM2U0MmEwMzM0NzZiYjkzZmE5NSIsIm5iZiI6MTc0MTc0NjQ0OS4wNzIsInN1YiI6IjY3ZDBmMTExMTM5OTBhMDU4YjYwYTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.up1r5T2OsuIxFfAr5o0xIu87A_pKhthmEooSjbjMyok";

  return axiosConfig;
});

export default axiosWithConfig;
