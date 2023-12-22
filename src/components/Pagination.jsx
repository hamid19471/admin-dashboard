import _ from "lodash";
import { useSearchParams } from "react-router-dom";
const Pagination = ({
  totalRecords,
  pageSize = import.meta.env.VITE_PAGE_SIZE,
}) => {
  const page = Math.ceil(totalRecords / pageSize);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const prevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };
  const nextPage = () => {
    if (currentPage < page) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  return (
    <div className="join mt-10">
      <button
        className={`join-item btn bg-blue-500 border-none hover:text-white hover:bg-blue-800 text-black ${
          currentPage === 1 ? "btn-disabled" : ""
        }`}
        onClick={prevPage}
      >
        قبلی
      </button>
      {_.times(page, (i) => (
        <button
          key={`page${i + 1}`}
          className={`join-item btn bg-blue-500 border-none hover:text-white hover:bg-blue-800 text-black ${
            currentPage === i + 1 ? "btn-disabled" : ""
          }`}
          onClick={() => setSearchParams({ page: i + 1 })}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={`join-item btn bg-blue-500 border-none hover:text-white hover:bg-blue-800 text-black ${
          currentPage === page ? "btn-disabled" : ""
        }`}
        onClick={nextPage}
      >
        بعدی
      </button>
    </div>
  );
};
export default Pagination;
