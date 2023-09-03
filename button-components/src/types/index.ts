 

export interface buttonProps {
    value: string 
    iconLeft?: string
    iconRight?: string
    disabledShadow?: boolean
    disabled?: boolean
    styles?: string   
}


export interface inputProps {  
    leftIcon?: React.ReactElement
    rightIcon?: React.ReactElement
    disabledShadow?: boolean
    disabled?: boolean
    styles?: string   
    labelStyle?: string
    isError?: boolean
    helperText?: string
    row?: number
    multiple?: boolean
    value?: string
}