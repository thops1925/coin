import { useState } from 'react';
import { fetchData } from './data';
function App() {
  const [query, setSearch] = useState('');
  const [newValue, setNewValue] = useState('');
  // const { data } = useGetCoinQuery(query);

  // useEffect(() => {
  //   console.log(data);
  //   const fetchData = data?.filter((item) =>
  //     item.name.toLowerCase().includes(query.toLowerCase()),
  //   );
  //   setNewValue(fetchData);
  // }, [data, query]);
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchData(query);
      setNewValue(data);
    }
  };
  console.log(newValue[0]);
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div>
        <h1 className="font-bold text-2xl">BTC Price and Market Stats</h1>
      </div>
      <div className="w-full max-w-xs">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Coin"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={search}
          value={query}
        />
      </div>
    </div>
  );
}

export default App;
