import { inputProps } from "../../types";

 

export default function index({
    disabled = false, 
    leftIcon,
    rightIcon,
    styles,
    labelStyle,
    isError = false,
    helperText = "",
    row,
    multiple=false,
    value = ""
}:inputProps) {

    return (   
        <div className="relative min-w-max peer flex flex-col-reverse gap-y-[4px]">
            {leftIcon && leftIcon}
            {helperText && 
                <span className={`${isError ? 'text-danger' : 'text-gray-3'}  text-[10px] leading-normal font-japanese not-italic`}>{helperText}</span>
            }
            {multiple ? 
                <textarea value={value} className={'input resize-none'} placeholder="Placeholder" rows={row}  />
                :
                <input  
                    className={`input ${styles} ${leftIcon && 'pl-[38px]'} ${rightIcon && 'pr-[38px]'} disabled:disabled-input peer ${isError && 'border-danger text-danger hover:border-gray-1 focus:border-danger'}`} 
                    placeholder='Placeholder' 
                    id="input" 
                    disabled={disabled} 
                    value={value}
                /> 
            }
            <label htmlFor="input" className={`input-label   ${labelStyle} ${isError ? 'border-danger text-danger  peer-hover:text-gray-1 peer-focus:text-danger' : 'text-gray-1 peer-focus:text-primary '}`}>Label</label>
            {rightIcon && rightIcon}
        </div> 
    )
}
