import Image from 'next/image';
import NavigationLinks from '@/app/layout/components/the-header/NavigationLinks';
import {useState} from 'react';
import MenuIcons from '@/app/layout/components/the-header/MenuIcons';
import TheHeaderMobile from '@/app/layout/components/the-header/TheHeaderMobile';

const TheHeader = () => {
   const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

   function handleMobileMenuClick() {
      setIsMobileHeaderOpen(true);
   }

   function handleMobileCloseClick() {
      setIsMobileHeaderOpen(false);
   }

   return (
       <header className='flex relative justify-between py-7 md:py-10 px-5 md:px-[100px]'>
          <h1 className='font-bold text-lg lg:text-2xl'>Logo Here</h1>

          <nav>
             <div className='hidden lg:flex'>
                <ul className='flex gap-12'>
                   <NavigationLinks />
                </ul>
                <div className='flex gap-9 ml-[60px]'>
                   <MenuIcons/>
                </div>
             </div>

             <div className='lg:hidden block'>
               <button onClick={handleMobileMenuClick}>
                  <Image src='icons/menu.svg' alt='menu' width={24} height={24} />
               </button>
             </div>
          </nav>

          <TheHeaderMobile onClose={handleMobileCloseClick} isOpen={isMobileHeaderOpen}/>
       </header>
   );
};

export default TheHeader;
