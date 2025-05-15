import logo from './logo.svg';
import './App.css';
import AvatarCreateModal from './components/AvatarCreateModal';
import Header from './components/Header';
import Avatar from './components/Avatar';
import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='bg-gray-800 min-w-screen min-h-screen'>


      <Header />
      {!isModalOpen &&
        <Avatar />
      }
      <div>
        {!isModalOpen &&
          <button onClick={() => setIsModalOpen(true)}
            className="font-[Roboto] fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-400 text-white p-2 rounded-full shadow-lg cursor-pointer"
          >
            Create New Avatar
          </button>
        }
      </div>
      <AvatarCreateModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
