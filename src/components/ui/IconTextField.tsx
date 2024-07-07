import React, { useRef } from 'react';

type IconTextFieldProps<T extends string | number> = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isRequired: boolean;
  placeholder: string;
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  id?: string;
  type?: string;
};

const IconTextField = <T extends string | number>({
  Icon,
  id,
  isRequired,
  placeholder,
  value,
  setValue,
  type = 'text'
}: IconTextFieldProps<T>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'number') {
      setValue(e.target.value as unknown as T);
    } else {
      setValue(e.target.value as T);
    }
  };

  return (
    <div className="icon-text-field" onClick={handleClick}>
      <div className="icon-text-field__icon-container">
        <Icon className="icon-text-field__icon" />
      </div>
      <input
        ref={inputRef}
        id={id ? id : ''}
        required={isRequired}
        placeholder={placeholder}
        type={type ? type : 'text'}
        className="icon-text-field__input-field"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default IconTextField;
