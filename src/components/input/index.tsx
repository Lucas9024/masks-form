import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep, currency } from './masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "cep" | "currency"
}

const Input: React.FC<InputProps> = ({
   mask, ...props
}) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        // 99999-9999
        // Regex 

        if(mask === 'cep'){
            cep(e);

        }
        if(mask === 'currency'){
            
            currency(e);
        }


    }, [mask])


    return (

        <div> 
            <input {...props} onKeyUp={handleKeyUp}/>
        </div> 
    )
}

export default Input;