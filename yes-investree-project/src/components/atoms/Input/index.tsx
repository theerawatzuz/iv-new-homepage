import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { cx, prefixClass } from "helpers/utils";
import { ChangeEvent, ReactNode, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputProps<TFieldValues extends FieldValues = FieldValues> {
  value?: string | number;
  name?: string;
  label?: string | null;
  type?: string;
  pattern?: string;
  className?: string;
  inputClassName?: string;
  max?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number;
  errorMessage?: string | null;
  isError?: boolean;
  helperMessage?: string;
  placeholder?: string | null;
  anchorName?: string;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;
  fullWidth?: boolean;
  labelIcon?: ReactNode;
  dataTestId?: string;
  "data-encrypt"?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: () => any;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  inlineLabel?: boolean;
  registration?: {
    name: Path<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
  };
  isOnlyNumber?: boolean;
  isOnlyNumberAndAlphabet?: boolean;
}

const Input = <TFormValues extends Record<string, unknown>>({
  label,
  onChange,
  onBlur,
  disabled,
  readOnly,
  placeholder,
  value,
  errorMessage,
  isError,
  helperMessage,
  fullWidth,
  name,
  required,
  className,
  inputClassName,
  labelIcon,
  anchorName,
  type = "text",
  dataTestId,
  inlineLabel = false,
  registration,
  isOnlyNumber,
  isOnlyNumberAndAlphabet,
  ...props
}: InputProps<TFormValues>) => {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const field = registration && {
    ...registration.register(registration.name, { required }),
  };
  const anchor = anchorName || registration?.name;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (isOnlyNumber) {
      value = e.target.value.replace(/[^\d]/g, "");
    }
    if (isOnlyNumberAndAlphabet) {
      value = e.target.value.replace(/[^a-zA-Z0-9]+/g, "");
    }
    if (!registration) return onChange && onChange(value);
    return onChange ? onChange(value) : field?.onChange;
  };

  return (
    <div className={cx(className, "relative", { "w-full": fullWidth })}>
      {label && (
        <p
          className={`mb-1 text-left text-label-large text-black-100 ${
            inlineLabel ? "break-keep" : "flex"
          }`}
        >
          {label}{" "}
          {required && <span className='ml-1 text-danger-primary'>*</span>}{" "}
          <span className='ml-1'>{labelIcon}</span>
        </p>
      )}

      {field ? (
        <input
          {...props}
          {...field}
          onChange={handleChange}
          onBlur={(e) => onBlur && onBlur(e.target.value)}
          className={cx(
            prefixClass("placeholder", "text-input1 text-gray-500"),
            "box-border h-13 w-full gap-4 rounded-xl border border-solid p-4 text-input1",
            "shadow-none outline-none ring-transparent focus:ring-0",
            {
              "border-danger-primary focus:border-danger-primary":
                errorMessage || isError,
            },
            {
              "bg-disabled text-gray-700 focus:border-gray-500": disabled,
            },
            {
              "border-gray-500 hover:border-light-blue-500 focus:border-light-blue-500":
                !disabled && !errorMessage && !isError,
            },
            inputClassName
          )}
          type={inputType}
          defaultValue={value}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder || ""}
          data-testid={`${dataTestId}Input`}
        />
      ) : (
        <input
          required={required}
          {...props}
          className={cx(
            prefixClass("placeholder", "text-input1 text-gray-500"),
            "box-border h-13 w-full gap-4 rounded-xl border border-solid p-4 text-input1",
            "shadow-none outline-none ring-transparent focus:ring-0",
            {
              "border-danger-primary focus:border-danger-primary":
                errorMessage || isError,
            },
            {
              "bg-disabled text-gray-700 focus:border-gray-500": disabled,
            },
            {
              "border-gray-500 hover:border-light-blue-500 focus:border-light-blue-500":
                !disabled && !errorMessage && !isError,
            },
            inputClassName
          )}
          type={inputType}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder || ""}
          name={name}
          onChange={handleChange}
          onBlur={(e) => onBlur && onBlur(e.target.value)}
          data-testid={`${dataTestId}Input`}
        />
      )}

      {type === "password" && (
        <div onClick={togglePassword} className='absolute top-9 right-4'>
          {inputType !== "password" && <VisibilityIcon />}
          {inputType === "password" && <VisibilityOffIcon />}
        </div>
      )}
      {errorMessage ? (
        <div
          className='mt-1 text-left text-caption text-danger-primary'
          data-testid={`${dataTestId}ErrorText`}
        >
          {errorMessage}
        </div>
      ) : (
        helperMessage && (
          <div
            className='mt-1 text-left text-label-small text-gray-700'
            data-testid={`${dataTestId}HelperText`}
          >
            {helperMessage}
          </div>
        )
      )}
    </div>
  );
};

export default Input;
