import './pagination.scss';
interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  page,
  totalPages,
  setPage,
}: PaginationProps) {
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={prevPage} disabled={page === 0}>
        &lt;
      </button>
      <button className="pages-count">{page + 1}</button>
      <button onClick={nextPage} disabled={page === totalPages - 1}>
        &gt;
      </button>
    </div>
  );
}
