import { register } from "@frukmruk/html";

const Recommendation = (prop) => {
  return (
    <div
      id="rec"
      class="p-2 mb-6 mx-3
      w-32 h-32 
      md:w-40 md:h-40 
      border border-solid border-blue-200
      rounded-lg
      bg-blue-800
      text-white">
      {prop.title}
    </div>
  );
};

register({ Recommendation });

export default Recommendation;
