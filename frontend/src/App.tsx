import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <h1 className='text-center text-2xl font-bold'>MERN Stack Test</h1>
      <p className='text-center text-5xl font-bold text-red-500'>Message from backend: {message}</p>
    </div>
  );
}

export default App;