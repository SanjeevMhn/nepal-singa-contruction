"use client";

import { FC, useMemo, useState } from "react";
import ImageCard from "./ImageCard";

type ImageGridProps = {
  data: Array<any>;
};

const ImageGrid: FC<ImageGridProps> = ({ data }) => {
  const sortedData = useMemo(() => {
    const groupedData = data.reduce((acc, curr) => {
      const id = curr.id;
      if (!acc[id]) {
        const updatedObj = {
          id: curr.id,
          name: curr.name,
          is_completed: curr.is_completed,
          images: [],
        };
        acc[id] = updatedObj;
        if (curr.img) {
          acc[id].images!.push(curr.img);
        }
      } else {
        acc[id] = {
          ...acc[id],
          images: [...acc[id].images, curr.img],
        };
      }

      return acc;
    }, {});

    return Object.values(groupedData);
  }, [data]);

  const [page, setPage] = useState<number>(1);
  const pageSize = 4;

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, page]);

  return (
    <>
      <div className="image-grid-container grid grid-cols-[repeat(auto-fill,minmax(min(40rem,100%),1fr))] gap-[1.5rem]">
        {paginatedData.map((da: any, index: number) => (
          <ImageCard data={da} key={index} />
        ))}
      </div>
      <footer className="image-grid-pagination mt-auto flex flex-col sm:flex-row items-center justify-end gap-[0.75rem] p-[1.5rem]">
        <p className="pr-[1.5rem]">
          Showing{" "}
          {page == 1
            ? 1
            : page <= totalPages
            ? (page - 1) * pageSize + 1
            : (page - 1) * 11}{" "}
          to {page < totalPages ? pageSize * page : data.length} of{" "}
          {data.length}
        </p>
        <div className="flex items-center gap-[0.75rem]">
          <a
            href="#grid"
            className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${
              page == 1
                ? "cursor-not-allowed! pointer-events-none opacity-[0.5]"
                : ""
            }`}
            onClick={() => setPage(1)}
          >
            <span className="icon-container w-[2rem] h-[2rem] flex items-center justify-center">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M105.4 297.4C92.9 309.9 92.9 330.2 105.4 342.7L265.4 502.7C277.9 515.2 298.2 515.2 310.7 502.7C323.2 490.2 323.2 469.9 310.7 457.4L173.3 320L310.6 182.6C323.1 170.1 323.1 149.8 310.6 137.3C298.1 124.8 277.8 124.8 265.3 137.3L105.3 297.3zM457.4 137.4L297.4 297.4C284.9 309.9 284.9 330.2 297.4 342.7L457.4 502.7C469.9 515.2 490.2 515.2 502.7 502.7C515.2 490.2 515.2 469.9 502.7 457.4L365.3 320L502.6 182.6C515.1 170.1 515.1 149.8 502.6 137.3C490.1 124.8 469.8 124.8 457.3 137.3z" />
              </svg>
            </span>
          </a>

          <a
            href="#grid"
            className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${
              page == 1
                ? "cursor-not-allowed! pointer-events-none opacity-[0.5]"
                : ""
            }`}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <span className="icon-container w-[2rem] h-[2rem] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-full h-full"
              >
                <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
              </svg>
            </span>
          </a>

          <a
            href="#grid"
            className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${
              page >= totalPages
                ? "cursor-not-allowed!  pointer-events-none opacity-[0.5]"
                : ""
            }`}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <span className="icon-container w-[2rem] h-[2rem] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-full h-full"
              >
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
              </svg>
            </span>
          </a>

          <a
            href="#grid"
            className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${
              page >= totalPages
                ? "cursor-not-allowed! pointer-events-none opacity-[0.5]"
                : ""
            }`}
            onClick={() => setPage(totalPages)}
          >
            <span className="icon-container w-[2rem] h-[2rem] flex items-center justify-center">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M535.1 342.6C547.6 330.1 547.6 309.8 535.1 297.3L375.1 137.3C362.6 124.8 342.3 124.8 329.8 137.3C317.3 149.8 317.3 170.1 329.8 182.6L467.2 320L329.9 457.4C317.4 469.9 317.4 490.2 329.9 502.7C342.4 515.2 362.7 515.2 375.2 502.7L535.2 342.7zM183.1 502.6L343.1 342.6C355.6 330.1 355.6 309.8 343.1 297.3L183.1 137.3C170.6 124.8 150.3 124.8 137.8 137.3C125.3 149.8 125.3 170.1 137.8 182.6L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7z" />
              </svg>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default ImageGrid;
