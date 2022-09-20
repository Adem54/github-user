import React from 'react'

const Button = (props:ButtonPropsType) => {
    const {type,className,onClick,children}=props;
  return (
    <button 
    type={type}
    className={className}
    onClick={onClick}
    >{children}</button>
  )
}

interface ButtonPropsType {
    type:"button" | "submit";
    // styles?:{readonly [key:string]:string;};
    className:string;
    onClick?:()=>void;
    children:React.ReactNode;
}

export default Button