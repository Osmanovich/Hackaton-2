import { register } from "@frukmruk/html";

const MainHomeWrapper = (props) => {
  return (
    <div
      className="flex flex-col
        justify-center 
        w-screen">
      {props.children}
    </div>
  );
};

register({ MainHomeWrapper });

export default MainHomeWrapper;
