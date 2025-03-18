import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://test-backend-phi-pearl.vercel.app/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <h1 className='text-center text-2xl font-bold'>MERN Stack Test</h1>
      <p className='text-center text-5xl font-bold text-red-500'>Message from backend</p>

      <p className='text-blue-500 text-4xl font-bold my-4'> {message ? message : "Pending..."}</p>
    </div>
  );
}

export default App;