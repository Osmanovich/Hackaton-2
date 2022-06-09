import { register } from "@frukmruk/html";

const Heading = ({ children, ...rest } = {}) => {
  return (
    <div
      id="heading"
      class="h-16 md:w-full 
        text-2xl text-gray-300
        bg-purple-500"
      {...rest}>
      {children}
    </div>
  );
};

register({ Heading });

export default Heading;
