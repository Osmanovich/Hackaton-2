import { register } from "@frukmruk/html";

const CommentsWrapper = ({ children }) => {
  return (
    <div
      id="comments"
      class="min-h-24 overflow-visible 
      mb-4 p-2 px-2 mt-16 md:mt-20
      rounded-lg">
      <div class="text-xl md:text-2xl mb-6">Reviews</div>

      {children}
    </div>
  );
};

register({ CommentsWrapper });

export default CommentsWrapper;
