import { register } from "@frukmruk/html";

const RecommendationsWrapper = (props) => {
  return (
    <div
      class="flex flex-col flex-wrap  
        w-80 h-96 
        mx-6 md:mx-0 md:mt-1">
      <div
        class="flex flex-row flex-wrap
        justify-center md:items-center md:justify-start 
        px-4 py-8">
        {props.children}
      </div>
    </div>
  );
};

register({ RecommendationsWrapper });

export default RecommendationsWrapper;
