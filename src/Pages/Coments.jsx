import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LuMessageSquareText } from "react-icons/lu";
const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sophia Lane",
      avatar: "https://i.pravatar.cc/50?img=1",
      text: "Ipsum lobortis mauris id adipiscing in quis. Commodo id eleifend velit sed duis. Faucibus senectus pretium arcu facilisis nisl.",
      likes: 478,
      dislikes: 10,
      time: "46 minutes ago",
      replies: [],
    },
    {
      id: 2,
      name: "Mia Carter",
      avatar: "https://i.pravatar.cc/50?img=2",
      text: "Commodo id eleifend velit sed dui.",
      likes: 478,
      dislikes: 5,
      time: "1 hour ago",
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCommentSubmit = () => {
    if (newComment.trim() || selectedFile) {
      setComments([
        {
          id: Date.now(),
          name: "You",
          avatar: "https://i.pravatar.cc/50?img=3",
          text: newComment,
          file: selectedFile,
          likes: 0,
          dislikes: 0,
          time: "Just now",
          replies: [],
        },
        ...comments,
      ]);
      setNewComment("");
      setSelectedFile(null);
    }
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, likes: comment.likes + 1 }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === id ? { ...reply, likes: reply.likes + 1 } : reply
              ),
            }
      )
    );
  };

  const handleDislike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === id
                  ? { ...reply, dislikes: reply.dislikes + 1 }
                  : reply
              ),
            }
      )
    );
  };

  const handleReplySubmit = (id) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      name: "You",
      avatar: "https://i.pravatar.cc/50?img=4",
      text: replyText,
      time: "Just now",
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, replies: [...comment.replies, newReply] }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === id
                  ? { ...reply, replies: [...reply.replies, newReply] }
                  : reply
              ),
            }
      )
    );

    setReplyingTo(null);
    setReplyText("");
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="bg-[#1F1F1F] min-h-screen">
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto p-4 text-white rounded-lg">
        <h2 className="text-4xl text-center font-bold mb-4">Comments</h2>
        <div className="bg-[#141415] px-4 rounded-md">
          <div className="mb-4 flex items-center space-x-2">
            <textarea
              className="w-full p-2 pb-4 bg-transparent text-white focus:outline-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            ></textarea>
          </div>
          <div className="flex justify-between pb-6">
            <button
              className="p-2 text-white w-20"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <GrAttachment />
            </button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleReplySubmit={handleReplySubmit}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              replyText={replyText}
              setReplyText={setReplyText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Comment Component (Handles Nested Replies)
const Comment = ({
  comment,
  handleLike,
  handleDislike,
  handleReplySubmit,
  replyingTo,
  setReplyingTo,
  replyText,
  setReplyText,
}) => (
  <div className="mb-4 p-4 flex space-x-4">
    {/* Profile Picture */}
    <img
      src={comment.avatar}
      alt="User Avatar"
      className="w-10 h-10 rounded-full"
    />

    <div className="flex-1">
      <p className="font-bold">
        {comment.name}{" "}
        <span className="text-sm text-gray-400">{comment.time}</span>
      </p>
      <p className="mt-2">{comment.text}</p>

      {/* Like and Dislike buttons */}
      <div className="flex gap-4 mt-2">
        <button
          className="text-gray-400 hover:text-white flex items-center gap-1"
          onClick={() => handleLike(comment.id)}
        >
          {" "}
          <span>
            <BiLike />
          </span>{" "}
          {comment.likes}
        </button>
        <button
          className="text-gray-400 hover:text-white flex items-center gap-1"
          onClick={() => handleDislike(comment.id)}
        >
          <BiDislike />
          {comment.dislikes}
        </button>
        <button
          className="text-gray-400 hover:text-white flex items-center gap-1" 
          onClick={() => setReplyingTo(comment.id)}
        ><span><LuMessageSquareText /></span>
          Reply        </button>
      </div>

      {/* Reply input */}
      {replyingTo === comment.id && (
        <div className="mt-2  rounded-md p-2">
          <textarea
            className="w-full  bg-transparent text-white focus:outline-none border-b-[1px]"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          ></textarea>
          <div className=" flex justify-end"> <button
            className=" px-4 border rounded-md text-white "
            onClick={() => handleReplySubmit(comment.id)}
          >
            Add
          </button></div>
         
         
        </div>
      )}

      {/* Display Replies */}
      {comment.replies.length > 0 && (
        <div className="ml-6 mt-2 pl-4">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleReplySubmit={handleReplySubmit}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              replyText={replyText}
              setReplyText={setReplyText}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default CommentsSection;
