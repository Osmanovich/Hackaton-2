import { register } from "@frukmruk/html";

const MainWrapper = (props) => {
  return (
    <div
      className="flex flex-col
        justify-center 
        w-screen h-screen 
        mx-20
        p-6">
      {props.children}
    </div>
  );
};

register({ MainWrapper });

export default MainWrapper;
