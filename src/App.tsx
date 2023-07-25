import { useState, useEffect } from 'react';
import { AppType } from '../functions/api/[[route]]';
import { hc } from 'hono/client';

const client = hc<AppType>('/api');

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.api.foo.$get();
      const data = await res.json();
      setMessage(data.message);
    };
    fetchData();
  }, []);

  return <h1>{message}!!!!!</h1>;
};

export default App;
