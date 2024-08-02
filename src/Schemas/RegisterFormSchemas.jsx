import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Email is not Acceptable").required("Email Address is Obligable"),
    age: yup.number().positive("It Should be a Positive Number").integer("It Should be an Integer").required("Age is Obligable"),
    password: yup.string().required("Password is Obligable"),
    confirmPassword: yup.string().required("Confirm Password is Obligable").oneOf([yup.ref('password', yup.password)], "Passwords doesn't Match"),
    // term: yup.boolean().required("Please Check the Terms and Conditions")
});