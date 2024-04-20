import { ChangeEventHandler, MouseEventHandler } from "react";
import InputMask from "react-input-mask";

export default function Input({
  disabled,
  inputMode,
  named,
  className,
  placeholder,
  value,
  onChange,
  id,
  mask,
  maskChar,
  onMouseDown,
}: {
  disabled?: boolean;
  inputMode:
    | "search"
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal";
  named: string;
  className?: string;
  placeholder: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id?: string;
  mask?: string;
  maskChar?: string;
  onMouseDown?: MouseEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      {!mask && (
        <input
          disabled={disabled}
          inputMode={inputMode}
          name={named}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      )}
      {mask && (
        <InputMask
          disabled={disabled}
          inputMode={inputMode}
          name={named}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          mask={mask}
          maskChar={maskChar}
          onMouseDown={onMouseDown}
          className={className}
        />
      )}
    </>
  );
}
