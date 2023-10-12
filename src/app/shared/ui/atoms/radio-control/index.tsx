import {ComponentProps, FC} from 'react';
import {FormControlLabel, Radio} from '@mui/material';
import TheCheckedIcon from '@/app/shared/ui/atoms/radio-control/TheCheckedIcon';

type Props = Omit<ComponentProps<typeof FormControlLabel>, 'control'>;

const RadioControl: FC<Props> = (props) => {
   return (
       <FormControlLabel className='mr-0'
           control={<Radio disableRipple checkedIcon={<TheCheckedIcon/>} icon={<div className="bg-[#E0E0E0] rounded-full w-[13px] h-[13px]"/>}/>}
           {...props}/>
   );
};

export default RadioControl;
