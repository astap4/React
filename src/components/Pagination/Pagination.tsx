import { SetURLSearchParams } from 'react-router-dom';
import './pagination.scss';
interface PaginationProps {
  setSearchParams: SetURLSearchParams;
  page: string;
  totalPages: number;
  fetchData: () => void;
  setIsDataLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Pagination({
  setSearchParams,
  page,
  totalPages,
  fetchData,
  setIsDataLoading,
}: PaginationProps) {
  const pageNum = Number(page);

  const prevPage = () => {
    if (pageNum > 1) {
      setSearchParams((params) => {
        params.set('page', (pageNum - 1).toString());

        return params;
      });
      fetchData();
      setIsDataLoading(false);
    }
  };

  const nextPage = () => {
    if (pageNum <= totalPages - 1) {
      setSearchParams((params) => {
        console.log('params', params);
        params.set('page', (pageNum + 1).toString());
        return params;
      });
      fetchData();
      setIsDataLoading(false);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={prevPage}>&lt;</button>
      <button className="pages-count">{pageNum}</button>
      <button onClick={nextPage}>&gt;</button>
      <div></div>
    </div>
  );
}
