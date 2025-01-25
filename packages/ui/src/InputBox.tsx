interface InputBoxProps {
    type: string;
    placeholder: string;
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputBox = ({type,placeholder,onChange}: InputBoxProps) => {
    return (
        <input style={{height:'28px'}} type={type} placeholder={placeholder} onChange={onChange}/>
    );
}