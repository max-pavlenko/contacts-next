import Link from 'next/link';
import Image from 'next/image';
import {FC} from 'react';

import {HEADER_NAVIGATION} from '@/app/layout/constants/header';

type Props = {
   iconClass?: string,
}

const NavigationLinks: FC<Props> = ({iconClass = ''}) => {
   return (
       <>
          {HEADER_NAVIGATION.map(({content, link, icon, className}) => (
              <li className={`w-max ${className}`} key={link}>
                 <Link href={link}>
                    {content}
                 </Link>
                 {icon && <Image className={`inline-block ml-1 ${iconClass}`} src={`icons/${icon}`} alt='icon' width={12} height={7}/>}
              </li>
          ))}
       </>
   );
};

export default NavigationLinks;
