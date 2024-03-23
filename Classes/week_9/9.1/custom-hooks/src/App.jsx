import React, { useEffect, useState } from 'react';

function useDebounce(value, time) {
   const [debounced, setDebounced] = useState(value);

   useEffect(() => {
    const dbTimeout = setTimeout(() => {
      setDebounced(value)
    }, time);

    return(() => {
      clearTimeout(dbTimeout);
    })
   },[value]);

   return debounced
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  
  return (
    <div>
      <div>Debounced value is {debouncedValue}</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;