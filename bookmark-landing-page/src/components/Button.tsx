 
 

interface buttonProps {
    value: string
    styles?: string
    type: 'primary' | 'secondary'
    handleClick?: () => void
}

const Button = ({
    styles, handleClick, value, type
}: buttonProps) => {
    const primaryStyles = "bg-soft-blue text-white hover:bg-white cursor-pointer hover:text-soft-blue hover:border-soft-blue border"
    const btnStyle:string = type === 'primary' ? primaryStyles : 'bg-white shadow-lg text-dark-blue cursor-pointer hover:border-dark-blue hover:text-grayish-blue border border-white'

    return (
        <button className={`${styles} px-3 xs:px-6 sm:px-4 rounded-md py-3 font-semibold ${btnStyle}`} onClick={handleClick}>
            {value}
        </button>
    ) 
}

export default Button