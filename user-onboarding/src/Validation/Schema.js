import * as yup from "yup";

const schema = yup.object().shape({
    first_name: yup.string().trim().required("Please enter your first name"),
    last_name: yup.string().trim().required("Please enter your last name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    terms: yup.boolean().oneOf([true], "Please accept the Terms and Conditions")
})



export default schema;