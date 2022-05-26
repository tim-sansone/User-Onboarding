import * as yup from "yup";

const schema = yup.object().shape({
    first_name: yup.string().trim().max(8, "No more than 8 letters").required("Please enter your first name"),
    last_name: yup.string().trim().max(8, "No more than 8 letters").required("Please enter your last name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    role: yup.string().oneOf(["captain", "mate", "bosun", "diver"], "Please select a role").required("Please select a role"),
    meal: yup.string().oneOf(["beef", "chicken"], "Please select a meat option").required("You must eat in order to live"),
    terms: yup.boolean().oneOf([true], "Please accept the Terms and Conditions")
})



export default schema;