import { SetURLSearchParams } from 'react-router-dom';
import './limitItems.css';
import { useEffect, useState } from 'react';
interface LimitProps {
  setSearchParams: SetURLSearchParams;
  fetchData: () => void;
  setIsDataLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LimitItems({
  setSearchParams,
  fetchData,
  setIsDataLoading,
}: LimitProps) {
  const [inputLimit, setInputLimit] = useState<string>('');

  useEffect(() => {
    const savedLimitPage = localStorage.getItem('limitPage');
    if (savedLimitPage) {
      setInputLimit(savedLimitPage);
    }
  }, []);

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= 0) return;
    setInputLimit(event.target.value);
  };

  const applyLimit = () => {
    localStorage.setItem('limitPage', inputLimit);
    setSearchParams({
      page: '1',
      limitPage: inputLimit,
    });
    fetchData();
    setIsDataLoading(false);
  };

  return (
    <div className="limit-wrapper">
      <span>Page limit</span>
      <input
        type="number"
        value={inputLimit}
        onChange={handleLimitChange}
        className="limit-input"
      />
      <button onClick={applyLimit}>Apply</button>
    </div>
  );
}
