import { register } from "@frukmruk/html";

const Heading = ({ children, ...rest } = {}) => {
  return (
    <div
      id="heading"
      class="h-16 md:w-full 
        text-2xl text-gray-300
        bg-blue-900"
      {...rest}>
      {children}
    </div>
  );
};

register({ Heading });

export default Heading;
