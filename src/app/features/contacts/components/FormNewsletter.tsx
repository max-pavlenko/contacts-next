import Button from '@/app/shared/ui/atoms/button/Button';
import {ComponentProps, FC} from 'react';
import {twMerge} from 'tailwind-merge';

type Props = ComponentProps<'form'>;

const FormNewsletter: FC<Props> = ({className, ...props}) => {
   return (
       <form className={twMerge(`bg-[#131313] text-white rounded-[10px] px-[14px] pt-[14px] pb-5`, className)} {...props}>
          <h4 className='text-[16px] md:text-lg font-semibold'>Join Our Newsletter</h4>
          <div className='flex items-start my-5'>
             <input type="email" placeholder='Your email'
                    className='py-[11px] text-[12px] md:text-[16px] rounded-l-[4px] px-2.5 bg-[#1E1E1E]
                     placeholder:text-[#616161] placeholder:text-[11px] md:placeholder:text-[13px]'/>
             <Button className='rounded-l-none p-[11px_22px] text-[12px] md:text-[16px]'>
                Subscribe
             </Button>
          </div>
          <p className='text-[13px] opacity-50'>
             * Will send you weekly updates for your better tool management.
          </p>
       </form>
   );
};

export default FormNewsletter;
