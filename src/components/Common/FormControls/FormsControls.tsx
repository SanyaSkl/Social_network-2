import React from "react";
import classes from "./FormsControls.module.css";
import {Field, WrappedFieldMetaProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators/validators";
import {WrappedFieldProps} from "redux-form/lib/Field";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: string | React.FC<WrappedFieldProps>,
                            props = { }, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}
