import {FC} from 'react';
import Link from 'next/link';
import WithIcon from '@/app/shared/ui/atoms/with-icon/WithIcon';
import {FooterOption} from '@/app/layout/types/footer';
import {twMerge} from 'tailwind-merge';

type Props = {
   title: string;
   options: FooterOption[];
   className?: string;
};

const TheFooterColumn: FC<Props> = ({title, options, className = ''}) => {
   return (
       <figure className={twMerge('flex flex-col flex-1 gap-5', className)}>
          <figcaption className='md:text-lg md:mb-5 capitalize font-semibold'>{title}</figcaption>
          <ul className='flex flex-col gap-5 md:gap-6'>
             {options.map(({content, href, icon}) => (
                 <WithIcon className='gap-3 md:gap-6' icon={icon} key={content}>
                    <Link href={href}>{content}</Link>
                 </WithIcon>
             ))}
          </ul>
       </figure>
   );
};

export default TheFooterColumn;
