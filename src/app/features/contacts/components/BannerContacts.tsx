import WithIcon from '@/app/shared/ui/atoms/with-icon/WithIcon';
import Image from 'next/image';
import {SOCIALS} from '@/app/features/contacts/constants/socials';
import {FOOTER_CONTENT} from '@/app/layout/constants/footer';
import {ComponentProps, FC} from 'react';
import {twMerge} from 'tailwind-merge';

type Props = ComponentProps<'div'>;

const BannerContacts: FC<Props> = ({className, ...props}) => {
   return (
       <div className={twMerge(`bg-black rounded-[10px] overflow-hidden text-white relative text-center`, className)} {...props}>
          <h4 className="text-xl lg:text-3xl font-semibold">Contact Information</h4>
          <p className="text-[#C9C9C9] text-[11px] lg:text-lg mb-[12px] mt-[6px] lg:mb-0">Say something to start a live chat!</p>
          <ul className="lg:m-[111px_0_160px] grid gap-4 lg:gap-[50px] z-[1]">
             {FOOTER_CONTENT['reach us'].options.map(({content, icon}) => (
                 <WithIcon className="items-center lg:items-start gap-2.5 lg:gap-3" icon={icon} key={content}>
                    {content}
                 </WithIcon>
             ))}
          </ul>
          <div className="flex lg:justify-start justify-center gap-6 lg:mt-0 mt-[58px]">
             {SOCIALS.map(social => (
                 <button className="hover:invert" key={social}>
                    <Image src={`icons/${social}.svg`} alt={social} width={30} height={30}/>
                 </button>
             ))}
          </div>
          
          <div className="hidden lg:block absolute -bottom-[6%] w-[47%] h-[290px] -right-[10%]">
             <Image fill src="icons/circles.svg" alt="circles"/>
          </div>
          <div className="block lg:hidden absolute bottom-[-3%] -right-[3%]">
             <Image width={80} height={106} src="icons/circles-small.svg" alt="circles"/>
          </div>
       </div>
   );
};

export default BannerContacts;
