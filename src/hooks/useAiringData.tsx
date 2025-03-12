import { useEffect, useState } from "react";
import { Movie, PaginantionInfo, ResponseData } from "../services/type";
import { getAiring } from "../services/airing";

export const useAiringData = () => {
  const [airing, setAiring] = useState<Movie[]>();
  const [paginationInfo, setPaginationInfo] = useState<PaginantionInfo>({
    page: 1,
  });

  const fetchAiring = async () => {
    try {
      const response: ResponseData | undefined = await getAiring(
        paginationInfo.page
      );

      setAiring(response?.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAiring();
  }, [paginationInfo]);

  return { airing, paginationInfo, setPaginationInfo };
};
