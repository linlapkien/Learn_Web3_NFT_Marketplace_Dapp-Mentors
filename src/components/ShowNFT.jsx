import React from 'react';
import { FaTimes } from 'react-icons/fa';
import react, { useState } from 'react';
import { useGlobalState, setGlobalState } from '../store';
import Identicon from 'react-identicons';

const imgHero =
  'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg';

const ShowNFT = () => {
  const [modal] = useGlobalState('showModal');

  const onChangePrice = () => {
    setGlobalState('showModal', 'scale-0');
    setGlobalState('updateModal', 'scale-100');
  };

  const closeModal = () => {
    setGlobalState('showModal', 'scale-0');
  };

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Buy NFT</p>
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
            <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgHero}
                alt="NFT"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">Title</h4>
            <p className="text-gray-400 text-xs my-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, dolorem sequi corrupti, laborum dolorum eligendi
              maxime facilis unde sapiente doloremque odio ducimus deleniti
              fugit iste cum illum nihil eveniet a.
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  string={'dacdajncaj'}
                  size={50}
                  className="w-10 h-10 object-contain rounded-full mr-3"
                />

                <div className="flex flex-col justify-center items-start">
                  <small className="font-bold">@Owner</small>
                  <small className="text-pink-800 font-semibold">
                    0x31...03f2
                  </small>
                </div>
              </div>

              <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.34 ETH</p>
              </div>
            </div>
          </div>

          {/* ---------btn------------ */}
          <div className="flex justify-between items-center space-x-2">
            <button className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full w-full ">
              Purchase
            </button>

            <button
              className="flex justify-center items-center shadow-lg shadow-black text-white p-2 mt-5 bg-[#e32970] hover:bg-[#bd255f] rounded-full w-full "
              onClick={onChangePrice}
            >
              Change Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNFT;
