import { useState } from "react";

import { register, fruktal } from "@frukmruk/html";

const FormInput = ({
  id,
  field,
  type,
  placeholder,
  value: value_ = "",
  onChange = () => {},
}) => {
  console.log("[FormInput]", { id, field, type, placeholder, value_ });

  const [value, setValue] = useState(value_);

  return (
    <>
      {fruktal`

        input#${field.trim()}
        :class h-6 w-full
        :class m-1
        :class border border-solid border-gray-600
        
        :placeholder ${placeholder.trim()}
        
        :name ${field.trim()}
        :type ${type.trim()}
        :value ${value?.trim()}
        
        :onChange ${(e) => {
          const nextValue = e.target.value;

          console.log({ nextValue });

          setValue(() => nextValue);
          onChange(nextValue);
        }}
        
      `}
    </>
  );
};

register({ FormInput });

export default FormInput;
