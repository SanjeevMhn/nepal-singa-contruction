"use client";

import { FC, useMemo, useState } from "react";

type DataGridProps = {
  data: Array<any>;
};

const DataGrid: FC<DataGridProps> = ({ data }) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [onGoing, setOnGoing] = useState<boolean>(false);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return onGoing
      ? data.filter((da) => da.completed_date == "")
      : data.slice(startIndex, endIndex);
  }, [page, pageSize, onGoing, data]);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setPage(1);
  };

  return (
    <>
      <header className="p-[1.5rem] flex items-center justify-end border-b-2 border-neutral-300 bg-white shadow-xl rounded-t-[1.2rem]">
        <div className="form-group flex items-center gap-[0.5rem]">
          <input
            type="checkbox"
            id="ongoing"
            name="ongoing"
            className="w-[2rem] h-[2rem]"
            onChange={() => {
              setPage(1);
              setOnGoing((prev) => !prev);
            }}
          />
          <label
            htmlFor="ongoing"
            className="form-label text-[1.5rem] font-medium cursor-pointer"
          >
            Show Ongoing Projects
          </label>
        </div>
      </header>
      <div className="project-list-table-container bg-white overflow-x-auto shadow-xl flex flex-col">
        <table className="w-full table grow">
          <thead>
            <tr>
              <th>S.N</th>
              <th className="min-w-[35rem]">Description</th>
              <th>Location</th>
              <th className="min-w-[15rem]">Completed Date</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((project: any, index: number) => (
              <tr key={index}>
                <td>{project.id}</td>
                <td>
                  <p className="line-clamp-3 text-ellipsis overflow-hidden md:line-clamp-none md:whitespace-normal md:overflow-visible">
                    {project.name}
                  </p>
                </td>
                <td>{project.location}</td>
                <td>
                  {project.completed_date !== "" ? (
                    project.completed_date
                  ) : (
                    <p className="text-amber-800 font-medium p-[0.25rem_1.5rem] bg-amber-200 border-2 border-amber-600 rounded-full text-[1.4rem] text-center">
                      ONGOING
                    </p>
                  )}
                </td>
                <td>
                  <div className="p-[1.5rem] pl-0">
                    <div className="progress-bar-container">
                      <label htmlFor="" className="progress-label">
                        {project.completed_percent}%
                      </label>
                      <progress
                        max={100}
                        value={Number(project.completed_percent)}
                      ></progress>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!onGoing ? (
        <footer className="bg-white rounded-b-[1.2rem] shadow-xl border-t-2 border-neutral-300 table-pagination mt-auto flex flex-col sm:flex-row items-center justify-end gap-[0.75rem] p-[1.5rem]">
          <p>Total Items</p>
          <select
            className="btn p-[0.5rem] mr-[1.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer"
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
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
            <a href="#grid"
              className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${page == 1 ? "cursor-not-allowed! opacity-[0.5] pointer-event-none" : ""}`}
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

            <a href="#grid"
              className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${page == 1 ? "cursor-not-allowed! opacity-[0.5] pointer-events-none" : ""}`}
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

            <a href="#grid"
              className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${page >= totalPages ? "cursor-not-allowed! opacity-[0.5] pointer-events-none" : ""}`}
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

            <a href="#grid"
              className={`btn p-[0.5rem] bg-white border border-slate-400 rounded-lg flex items-center justify-center cursor-pointer ${page >= totalPages ? "cursor-not-allowed! opacity-[0.5] pointer-events-none" : ""}`}
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
      ) : null}
    </>
  );
};

export default DataGrid;
