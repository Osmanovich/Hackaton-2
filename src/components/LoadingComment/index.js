import { register } from "@frukmruk/html";

const LoadingComment = () => {
  return (
    <div
      class="text-gray-600 
      my-2 text-sm 
      rounded-lg p-4
      bg-gray-200 animate-pulse">
      Loading...
    </div>
  );
};

register({ LoadingComment });

export default LoadingComment;
