import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getAiring = async (page: number) => {
  try {
    const response = await axiosWithConfig.get(
      `tv/airing_today?language=en-US&page=${page}`
    );

    return response.data as ResponseData | undefined;
  } catch (error) {
    console.log(error);
  }
};
