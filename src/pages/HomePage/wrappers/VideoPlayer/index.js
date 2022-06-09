import { register } from "@frukmruk/html";

const VideoPlayerWrapper = (props) => {
  return (
    <div
      id="player-container"
      class="flex flex-col 
        h-80 md:h-96 md:w-full
        justify-around 
        items-center  
        px-8 py-2">
      {props.children}
    </div>
  );
};

register({ VideoPlayerWrapper });

export default VideoPlayerWrapper;
