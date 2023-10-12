import {FC, useEffect} from 'react';
import Image from 'next/image';
import NavigationLinks from '@/app/layout/components/the-header/NavigationLinks';
import MenuIcons from '@/app/layout/components/the-header/MenuIcons';

type Props = { isOpen: boolean, onClose: () => void };

const TheHeaderMobile: FC<Props> = ({isOpen, onClose}) => {
   const openClasses = isOpen ? 'left-0' : 'left-full';
   
   useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'initial';
   }, [isOpen]);
   
   return (
       <div className={`fixed text-white z-10 h-[100vh] px-5 py-7 inset-0 bg-black ${openClasses} flex flex-col`}>
          <div className="flex justify-between">
             <h1 className="font-bold text-lg">Logo Here</h1>
             <button onClick={onClose}>
                <Image src="icons/cross.svg" alt="cross" width={24} height={24}/>
             </button>
          </div>
          
          <nav className="flex flex-col">
             <ul className="mt-[60px] flex flex-col gap-7 text-sm">
                <NavigationLinks iconClass="invert"/>
             </ul>
          </nav>
          
          <div className="flex gap-9 invert mt-auto justify-center">
             <MenuIcons/>
          </div>
       </div>
   
   );
};

export default TheHeaderMobile;
