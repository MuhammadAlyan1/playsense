import React, { useRef } from 'react';

type IconTextFieldProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isRequired: boolean;
  placeholder: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  id?: string;
  type?: string;
};

const IconTextField: React.FC<IconTextFieldProps> = ({
  Icon,
  id,
  isRequired,
  placeholder,
  value,
  setValue,
  type
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef?.current?.focus();
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
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default IconTextField;
