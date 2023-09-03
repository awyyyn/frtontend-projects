import { buttonProps } from '../../types/index';
 

const index = ({ 
    value, 
    iconLeft, 
    iconRight,  
    disabled = false, 
    disabledShadow,
    styles,  
}:buttonProps) =>  {
  
    

    return(
        <button 
            disabled={disabled}  
            className={`btn ${styles} ${iconLeft || iconRight ? 'flex items-center gap-x-2' : ''} ${disabled || disabledShadow ? 'shadow-none' : 'shadow-default'}`}
        >
            {iconLeft &&
                <img src={iconLeft} className='h-4 w-4' />
            }
            {value}
            {iconRight &&
                <img src={iconRight} className='h-4 w-4' />
            }
        </button>
    )
}

export default index


 /* ${color}   
    ${variant == "text" ? "disabled:text-disabled" : "disabled:disabled"}
    ${styles}
    ${disabledShadow ? 'drop-shadow-none' : 'shadow-default disabled:shadow-none'}
    ${variant}   
*/