import { register } from "@frukmruk/html";

const Comment = ({ text, author = "User" }) => {
  return (
    <div
      class="p-2
      text-gray-600
      my-2 text-sm
      md:text-md 
      rounded-lg 
      border border-solid border-gray-600">
      <div>{text}</div>
      <div class="font-bold text-gray-900">{author}</div>
    </div>
  );
};

register({ Comment });

export default Comment;
