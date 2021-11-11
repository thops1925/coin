import { useEffect, useState } from 'react';
import { useGetCoinQuery } from './services/coinApi';

function App() {
  const [query, setSearch] = useState('');
  const [newValue, setNewValue] = useState('');
  const { data } = useGetCoinQuery(query);

  useEffect(() => {
    setNewValue(data);
    const fetchData = data?.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setNewValue(fetchData);
  }, [data, query]);

  console.log(newValue);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="w-full max-w-sm">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Coin"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
