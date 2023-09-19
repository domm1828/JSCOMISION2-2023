'use client'

export const InputComponent = ({label,placeholder,className,cssdiv,value,changeValue}) => {

    const handleChangeText = (e) =>{
        changeValue(e.target.value)
    }
    return(<>
        <div className={cssdiv}>
            <label>{label}</label>
            <input onChange={handleChangeText} value={value} placeholder={placeholder} className={className} />
        </div>
        </>);
}