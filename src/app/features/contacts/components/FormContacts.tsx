import {FormControl, FormLabel, RadioGroup} from '@mui/material';
import RadioControl from '../../../shared/ui/atoms/radio-control';
import Input from '@/app/shared/ui/atoms/input/Input';
import Button from '@/app/shared/ui/atoms/button/Button';
import {ComponentProps, FC} from 'react';
import {twMerge} from 'tailwind-merge';

type Props = ComponentProps<'form'>;

const FormContacts: FC<Props> = ({className, ...props}) => {
   return (
       <form className={twMerge(`flex flex-col gap-6 w-full`, className)} {...props}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
             <Input placeholder='John' label='First Name'/>
             <Input placeholder='Doe' label='Last Name'/>
             <Input type='email' label='Email'/>
             <Input type='tel' label='Phone number'/>
          </div>
          <FormControl>
             <FormLabel className='mb-3 font-semibold'>Select Subject?</FormLabel>
             <RadioGroup defaultValue="1">
                <div className='grid md:grid-cols-4 grid-cols-2 gap-y-3 gap-5'>
                   <RadioControl label='General inquery' value={1}/>
                   <RadioControl label='General inquery' value={2}/>
                   <RadioControl label='General inquery' value={3}/>
                   <RadioControl label='General inquery' value={4}/>
                </div>
             </RadioGroup>
          </FormControl>
          <Input label='Message' placeholder='Write your message...'/>
          <Button className='lg:self-end'>Send Message</Button>
       </form>
   );
};

export default FormContacts;
