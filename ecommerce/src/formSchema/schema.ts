import * as yup from "yup";


//pincdoe schema for validation
export const pincodeSchema = yup
    .object({
        pincode: yup.string().required(
            "Pincode is required"
        ).min(6).max(6),
    })
    .required();


//login schema for validation
export const loginSchema = yup
    .object({
        email: yup.string().required(
            "Email is required"
        ),
        password: yup.string().required(
            "Password is required"
        ).min(8),
    })
    .required()


//signup schema for validation
export const signupSchema = yup
.object({
    name: yup.string().required(
        "Name is required"
    ).min(3),
    email: yup.string().required(
        "Email is required"
    ),
    password: yup.string().required(
        "Password is required"
    ).min(8),
})
.required()


export const shippingAddressSchema = yup
.object({
    name: yup.string().required(
        "Name is required"
    ).min(3),
    phone: yup.string().required(
        "Phone is required"
    ).min(10).max(10),
    address: yup.string().required(
        "Address is required"
    ).min(3),
    city: yup.string().required(
        "City is required"
    ).min(3),
    state: yup.string().required(
        "State is required"
    ).min(3),
    pincode: yup.string().required(
        "Pincode is required"
    ).min(6).max(6),
    district: yup.string().required(
        "District is required"
    ).min(3),
})