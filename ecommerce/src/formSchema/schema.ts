import * as yup from "yup";

export const pincodeSchema = yup
    .object({
        pincode: yup.string().required(
            "Pincode is required"
        ).min(6).max(6),
    })
    .required();