import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../store';

const imgHero =
  'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg';

const CreateNFT = () => {
  const [modal] = useGlobalState('modal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [imgBase64, setImgBase64] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price) return;

    console.log('Minted...');
    closeModal();
  };

  const closeModal = () => {
    setGlobalState('modal', 'scale-0');
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setImgBase64(null);
    setDescription('');
    setPrice('');
    setFileUrl('');
  };

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          {/* ------------------------ */}
          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgBase64 || imgHero}
                alt="NFT"
              />
            </div>
          </div>

          {/* ----------Choose File----------- */}

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <span className="sr-only">Choose Profile Photo</span>
            <input
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
              required
            />
          </div>

          {/* -----------Text------------- */}

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0"
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          {/* -----------Price------------- */}

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              className="block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0"
              type="number"
              placeholder="Price (ETH)"
              min={0.01}
              step={0.01}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* -----------Desc------------- */}

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 h-32 resize-none"
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>

          {/* ---------btn Mint now------------ */}
          <button className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full  ">
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
