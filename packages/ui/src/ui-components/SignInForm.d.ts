/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SignInFormInputValues = {
    email?: string;
    password?: string;
};
export declare type SignInFormValidationValues = {
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignInFormOverridesProps = {
    SignInFormGrid?: FormProps<GridProps>;
    email?: FormProps<TextFieldProps>;
    password?: FormProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type SignInFormProps = React.PropsWithChildren<{
    overrides?: SignInFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SignInFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: SignInFormInputValues) => SignInFormInputValues;
    onValidate?: SignInFormValidationValues;
} & React.CSSProperties>;
export default function SignInForm(props: SignInFormProps): React.ReactElement;
