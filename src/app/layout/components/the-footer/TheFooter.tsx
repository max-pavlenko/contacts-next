import TheFooterColumn from '@/app/layout/components/the-footer/TheFooterColumn';
import FormNewsletter from '@/app/features/contacts/components/FormNewsletter';
import {FOOTER_CONTENT} from '@/app/layout/constants/footer';

const TheFooter = () => {
   return (
       <footer className='grid gap-5 md:gap-11 text-white bg-black px-5 pb-9 pt-7 md:px-20 md:pt-20 md:pb-[66px]'>
          <h1 className='text-center text-4xl font-bold'>Logo Here</h1>

          <div className='border-t border-white w-full flex flex-wrap gap-y-7 gap-[60px] pt-8'>
             {Object.entries(FOOTER_CONTENT).map(([columnTitle, content]) => (
               <TheFooterColumn key={columnTitle} title={columnTitle} {...content}/>
             ))}
             <FormNewsletter className='sm:w-min w-full sm:mt-0 mt-2.5 self-start'/>
          </div>
       </footer>
   );
};

export default TheFooter;
