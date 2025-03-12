import React from "react";
import { useAiringData } from "../../hooks/useAiringData";
import Card from "../../component/card/card";
import { Movie } from "../../services/type";

const Airing: React.FC = () => {
  const { airing, paginationInfo, setPaginationInfo } = useAiringData();

  const handlePrevButton = () => {
    if (paginationInfo.page > 1) {
      setPaginationInfo({
        page: paginationInfo.page - 1,
      });
    }
  };

  const handleNextButton = () => {
    if (paginationInfo.page !== paginationInfo.total_pages) {
      setPaginationInfo({
        page: paginationInfo.page + 1,
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col py-10">
        <h1 className="font-semibold text-3xl pl-10 text-center">Airing Now</h1>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-7 px-10 mt-5">
          {airing?.map((item: Movie) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <div className="flex flex-row justify-around mt-10">
          <button
            onClick={handlePrevButton}
            className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextButton}
            className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Airing;
