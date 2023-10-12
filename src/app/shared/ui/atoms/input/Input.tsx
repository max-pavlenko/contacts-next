import {ComponentProps, FC} from 'react';
import {TextField} from '@mui/material';
import {twMerge} from 'tailwind-merge';

type Props = ComponentProps<typeof TextField>;

const Input: FC<Props> = ({className, ...props}) => {
   return (
       <TextField InputLabelProps={{ shrink: true }} className={twMerge(`w-full min-w-[200px]`, className)} variant='standard' {...props}/>
   );
};

export default Input;
