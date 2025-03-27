import React from 'react';
import SocialIcon from '../socialIcon/SocialIcon';

function Footer () {
  return (
    <footer className="flex flex-col justify-center items-center w-[100%] h-[200px] bg-gray-200 bottom-0">
      <div>&copy; No Copy Right Avaible
      </div>
      <div  className='flex justify-center items-center gap-2.5 mt-3.5'>
        <SocialIcon isBorder={true}/>
      </div>
    </footer>
  );
};

export default Footer;