import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useGlobalState, setGlobalState } from '../store';

const imgHero =
  'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg';

const UpdateNFT = () => {
  const [modal] = useGlobalState('updateModal');
  const [price, setPrice] = useState('');

  const closeModal = () => {
    setGlobalState('updateModal', 'scale-0');
    resetForm();
  };

  const resetForm = () => {
    setPrice('');
  };

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Candy NFT</p>
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
                src={imgHero}
                alt="NFT"
              />
            </div>
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

          {/* ---------btn Mint now------------ */}
          <button className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full  ">
            Update Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNFT;
