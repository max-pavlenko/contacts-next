import {ComponentProps, FC, PropsWithChildren} from 'react';
import Image from 'next/image';
import {twMerge} from 'tailwind-merge';

type Props = {
   icon?: string,
} & ComponentProps<'li'>;

const WithIcon: FC<PropsWithChildren<Props>> = ({children, icon, className, ...props}) => {
   return (
       <li className={twMerge(`flex z-[1] text-[12px] md:text-[16px] md:flex-row flex-col items-start`, className)} {...props}>
          {icon && <Image src={`icons/${icon}`} alt={icon} width={24} height={24} />}
          {children}
       </li>
   );
};

export default WithIcon;
