import { useState, useEffect } from 'react';

const useForm = (callback, validator) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmpassword: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validator(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback(values)
        }

    }, [errors])

    return { handleChange, values, handleSubmit, errors }

}

export default useForm;