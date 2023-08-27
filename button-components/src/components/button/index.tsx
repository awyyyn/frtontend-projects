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
            className={`btn ${styles} ${disabled || disabledShadow ? 'shadow-none' : 'shadow-default'}`}
        >
            {iconLeft &&
                <span>{iconLeft}</span>
            }
            {value}
            {iconRight &&
                <span>{iconRight}</span>
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