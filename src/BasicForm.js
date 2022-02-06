import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email:yup
    .string()
    .min(5)
    .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "please enter correct mail format"
        ),
    
    password:yup
    .string()
    .min(8)
    .max(12)
    .required(),
});
export function BasicForm(){
    const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
    useFormik({
        initialValues:{email:"",password:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit", values);
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Email"
            />
            {errors.email && touched.email ? errors.email : ""}
            <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder="password"
            />
           {errors.password && touched.password ? errors.password : ""}
<buttton type="submit">Submit</buttton>
        </form>
    )
}