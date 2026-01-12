"use client";

import { FC, useState } from "react";
import "../styles/imagecard.css";

type ImageCardType = {
  data: { [key: string]: any };
};

const ImageCard: FC<ImageCardType> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);

  const gotoPrevImage = () => {
    setCurrentImageIndex((prev) => (prev !== 0 ? prev - 1 : prev));
  };

  const gotoNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev !== data.images.length ? prev + 1 : prev
    );
  };
  return (
    <div className="project-card  bg-white shadow-xl flex flex-col gap-[1rem] rounded-2xl p-[2rem]">
      <div className="flex w-full items-center gap-[1rem]  img-container">
        {data.images.length > 1 ? (
          <>
            <div className="w-[32rem] h-[32rem] flex grow items-center justify-center rounded-lg overflow-hidden bg-blue-100">
              <img
                src={data.images[currentImageIndex - 1]}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <button
              type="button"
              className={`btn prev-btn bg-white rounded-full w-[3.5rem] h-[3.5rem] items-center justify-center flex items-center justify-center shadow-lg border border-slate-600 ${
                currentImageIndex == 1 ? "hidden" : "flex "
              }`}
              disabled={currentImageIndex == 1}
              onClick={() => gotoPrevImage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-[70%] h-[70%]"
              >
                <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
              </svg>
            </button>
            <button
              type="button"
              className={`btn next-btn bg-white rounded-full w-[3.5rem] h-[3.5rem] items-center justify-center shadown-lg border border-slate-600 ${
                currentImageIndex == data.images.length ? "hidden" : "flex "
              }`}
              disabled={currentImageIndex == data.images.length}
              onClick={() => gotoNextImage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-[70%] h-[70%]"
              >
                <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
              </svg>
            </button>
            <div className="indicator-container flex items-center gap-[1rem] border border-neutral-600 shadow-xl">
              {data.images.map((_: any, ind: number) => (
                <div className={`indicator w-[1.2rem] h-[1.2rem] rounded-full ${currentImageIndex == ind + 1 ? "bg-[var(--clr-primary)]" : "bg-neutral-400"}`} key={ind}></div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-[32rem] h-[32rem] flex grow items-center justify-center rounded-lg overflow-hidden bg-blue-100">
            <img
              src={data.images[0]}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      {!data.is_completed ? (
        <div className="ongoing-indicator pt-[1.5rem]">
          <span className="text-amber-800 font-medium p-[0.25rem_1.5rem] bg-amber-200 border-2 border-amber-600 rounded-full text-[1.4rem] text-center">
            ONGOING
          </span>
        </div>
      ) : null}
      <h2 className="text-[1.7rem] font-medium">{data.name}</h2>
    </div>
  );
};

export default ImageCard;
