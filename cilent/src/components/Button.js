import React, {memo} from 'react';


const Button = ({text, textColor, bgColor, IconProp, onClick, fullWidth}) => {
  return <button type="button" 
  className={`p-2 ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
  onClick={onClick}
  >
    <span>{text}</span>
    <span>{IconProp && <IconProp/>}</span>
    </button>;
};

export default memo(Button);
