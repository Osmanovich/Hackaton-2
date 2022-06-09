import { fruktal, register } from "@frukmruk/html";

const UpstartButton = ({
  type = "submit",
  onClick = () => {},
  onSubmit = () => {},
  children,
} = {}) => {
  // TODO: enable sending ...rest of prorperties!

  if (type.startsWith("submit")) {
    return (
      <>
        {fruktal`
          button#submitform
          :class flex flex-row
          :class items-center justify-center
          :class h-10 w-24
          :class mr-5 mt-2 px-5 py-2
          :class rounded-lg
          :class bg-green-500
          :class font-white text-sm
          :type ${type}
          :onClick ${onClick}
          :onSubmit ${onSubmit}

              ${children}
        `}
      </>
    );
  } else if (type.startsWith("danger")) {
    return (
      <>
        {fruktal`
          button#submitform
          :class flex flex-row
          :class items-center justify-center
          :class h-10 w-24
          :class mr-5 mt-2 px-5 py-2
          :class rounded-lg
          :class bg-red-500
          :class font-white text-sm
          :type ${type}
          :onClick ${onClick}
          :onSubmit ${onSubmit}

              ${children}
        `}
      </>
    );
  }
};

register({ UpstartButton });

export default UpstartButton;
