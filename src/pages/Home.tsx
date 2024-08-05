import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Logic to check if user is logged in
    const token = localStorage.getItem('authToken'); // Example check
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token from local storage
    setIsLoggedIn(false); // Update the login status
    navigate('/'); // Redirect to home
  };

  return (
    <div
      className='min-h-screen flex flex-col bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/ETAPimagebackground.jpg)' }}
    >
      <div className='bg-black bg-opacity-50 flex-grow flex flex-col'>
        <Header />

        <main className='container mx-auto py-10 px-6 flex-grow'>
          <section className='text-center mb-12'>
            <h2 className='text-5xl font-bold mb-4 text-white'>
              Welcome to the School Management System
            </h2>
            <p className='text-lg text-gray-300 bg-black bg-opacity-70 p-6 rounded-lg shadow-lg'>
              Manage your school efficiently with our system. Track progress,
              manage users, and more.
            </p>
          </section>

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Link
              to='/users'
              className='flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <h3 className='text-3xl font-bold mb-2 text-red-700'>Users</h3>
              <p className='text-gray-600 mb-4'>Manage and view all users.</p>
              <span className='mt-auto text-red-600 font-semibold'>→</span>
            </Link>

            <Link
              to='/subjects'
              className='flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <h3 className='text-3xl font-bold mb-2 text-red-700'>Subjects</h3>
              <p className='text-gray-600 mb-4'>View and create subjects.</p>
              <span className='mt-auto text-red-600 font-semibold'>→</span>
            </Link>

            <Link
              to='/topics'
              className='flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <h3 className='text-3xl font-bold mb-2 text-red-700'>Topics</h3>
              <p className='text-gray-600 mb-4'>
                Manage topics for each subject.
              </p>
              <span className='mt-auto text-red-600 font-semibold'>→</span>
            </Link>

            <Link
              to='/progress'
              className='flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105'
            >
              <h3 className='text-3xl font-bold mb-2 text-red-700'>Progress</h3>
              <p className='text-gray-600 mb-4'>Track student progress.</p>
              <span className='mt-auto text-red-600 font-semibold'>→</span>
            </Link>
          </section>

          <div className='flex justify-center mt-8'>
            {isLoggedIn ? (
              <Button
                variant='primary'
                size='large'
                className='mx-auto bg-red-600 hover:bg-red-700 text-white transition duration-200'
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link to='/register'>
                <Button variant='primary' size='large' className='mx-auto'>
                  Register
                </Button>
              </Link>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
  