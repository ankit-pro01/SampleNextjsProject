import { useState } from "react"

export function useForm(initialValues){
    
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name] : value })
    }

    return{
        values,
        errors,
        setErrors,
        handleInputChange
    }
}


export function Form({children, ...others}){
    return(
        <form {...others}>
            {children}
        </form>
    )
}


