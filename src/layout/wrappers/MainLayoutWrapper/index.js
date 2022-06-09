import { register } from "@frukmruk/html";

const MainWrapper = (props) => {
  return (
    <div
      class="flex flex-row flex-wrap 
        justify-start">
      {props.children}
    </div>
  );
};

register({ MainWrapper });

export default MainWrapper;
