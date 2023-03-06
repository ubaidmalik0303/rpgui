import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  textarea?: boolean;
  defaultValue?: string;
  rows?: number;
  cols?: number;
};

const index = ({
  label,
  placeholder,
  textarea,
  disabled,
  defaultValue,
  cols,
  rows,
}: Props) => {
  if (textarea) {
    return (
      <>
        <label>{label}</label>
        <textarea
          disabled={disabled}
          placeholder="write your story here..."
          defaultValue={defaultValue}
          rows={rows}
          cols={cols}
        />
      </>
    );
  }

  return (
    <>
      <label>{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default index;
