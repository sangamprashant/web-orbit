"use client";
import React, { useState } from 'react';
import ChatUi from './ChatUi';
import { botImage } from '@/assets/assets';

const FloatLayout = () => {
  const [chatActive, setChatActive] = useState<boolean>(false);

  const handleToggle = () => {
    setChatActive((prev) => !prev);
  };

  return (
    <>
      {chatActive ? (
        <ChatUi handleToggle={handleToggle}/>
      ) : (
        <div className="fixed bottom-2 right-3 z-50">
          <button type="button" onClick={handleToggle} className="w-16 h-16 ">
            <img src={botImage} alt="Chat Bot" className="w-full h-full rounded-full shadow" width={100} height={100} />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatLayout;
