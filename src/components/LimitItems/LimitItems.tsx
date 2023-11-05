import { useState } from 'react';
import './limitItems.css';

interface LimitProps {
  limitPages: number;
  onUpdateLimitPages: (newLimitPages: number) => void;
}

export default function LimitItems({
  limitPages,
  onUpdateLimitPages,
}: LimitProps) {
  const [newLimitPages, setNewLimitPages] = useState(limitPages);

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLimitPages(Number(event.target.value));
  };

  const applyLimit = () => {
    onUpdateLimitPages(newLimitPages);
  };

  return (
    <div className="limit-wrapper">
      <span>Page limit</span>
      <input
        type="number"
        value={newLimitPages}
        onChange={handleLimitChange}
        className="limit-input"
      />
      <button onClick={applyLimit}>Apply</button>
    </div>
  );
}
