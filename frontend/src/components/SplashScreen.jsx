import React, { useEffect, useState } from 'react';

function SplashScreen() {
  const [showLeftBorder, setShowLeftBorder] = useState(false);
  const [showRightBorder, setShowRightBorder] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowLeftBorder(true);
    }, 500);

    const timeout2 = setTimeout(() => {
      setShowRightBorder(true);
    }, 1000);



    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className='bg-white w-screen h-screen absolute top-0 left-0 flex justify-center items-center z-50 text-[#6E77EE]'>
      <div className='flex items-center'>
        <div
          className={`border-t-2 border-l-2 border-[#6E77EE] p-10 relative ${
            showLeftBorder ? 'animate-bounce' : ''
          } transition-all`}
        ></div>
        <h1 className='text-3xl mx-6 animate-pulse'>SIFAKA MATERIAL</h1>
        <div
          className={`border-b-2 border-r-2 border-[#6E77EE] p-10 relative ${
            showRightBorder ? 'animate-bounce' : ''
          } transition-all`}
        ></div>
      </div>
    </div>
  );
}

export default SplashScreen;
