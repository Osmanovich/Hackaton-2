import { register } from "@frukmruk/html";

const VideoPlayer = ({ title, isLoading = false }) => {
  return (
    <div
      id="player"
      class="p-2 my-6
        h-64 w-full lg:h-[248]
        border border-solid border-gray-500
        rounded-lg 
        text-xl text-gray-800">
      {isLoading && "Loader..."}

      {!isLoading && title}
    </div>
  );
};

register({ VideoPlayer });

export default VideoPlayer;
