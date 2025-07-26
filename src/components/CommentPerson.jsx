import { lists } from "@/actions/from-fillup-action";
import React from "react";

const CommentPerson = async () => {
  const showCommentList = await lists();

  return (
    <div className="text-white mt-6">
      <h2 className="text-3xl">Comment on your post</h2>

      <div className="mt-3">
        {showCommentList.map((user) => (
          <ul key={user.id} className="mb-3 border border-amber-200 p-2">
            <li>
              <span className="text-amber-300">name:</span> {user.name}
            </li>
            <li>
              <span className="text-blue-200">email:</span> {user.email}
            </li>
            <li>
              <span className="text-green-500">comment:</span> <br />
              {user.comment}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CommentPerson;
