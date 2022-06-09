import { register, fruktal } from "@frukmruk/html";

const FormWrapper = ({ onSubmit = () => {}, children } = {}) => {
  return (
    <>
      {fruktal`
        form#loginformw
        :action /login
        :class flex flex-col
        :class min-w-full
        :class place-content-around items-center
        :class border border-1 border-gray-400
        :class mx-5 py-10 px-20
        :onSubmit ${onSubmit}

          ${children}
    `}
    </>
  );
};

register({ FormWrapper });

export default FormWrapper;
