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
            {/* Display bot image inside button */}
            <img src={botImage} alt="Chat Bot" className="w-full h-full rounded-full shadow" />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatLayout;
