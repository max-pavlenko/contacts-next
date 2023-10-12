import Image from 'next/image';

const MenuIcons = () => {
   return (
       <>
          <Image src='icons/user-profile.svg' alt='user profile' width={31} height={32}/>
          <Image src='icons/cart.svg' alt='cart' width={31} height={32}/>
       </>
   );
};

export default MenuIcons;
