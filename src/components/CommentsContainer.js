import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const commentData = [
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    replies: [
      {
        name: "Saideep",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
        replies: [],
      },
      {
        name: "Saideep",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Saideep",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Saideep",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Saideep",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Saideep",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Saideep",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Saideep",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Saideep",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Saideep",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Saideep",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Saideep",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Saideep",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
];

const Comment = ({ info }) => {
  const { name, text, replies } = info;
  return (
    <div>
      <div className="">
        <div className="flex items-center">
          <div className="flex justify-center w-7 h-7 items-center rounded-full bg-purple-400">
            <FontAwesomeIcon icon={faUser} className="text-sm" />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold">{name}</h2>

            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // console.log(comments)
  return (
    <div>
      <div>
        {comments.map((comment) => (
          <div>
            <Comment info={comment} />
            <div className="border-black border-l-2 pl-5 ml-3">
            <CommentsList comments={comment.replies} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="bg-black bg-opacity-5 p-4 rounded-xl">
      
      <CommentsList comments={commentData} />
    </div>
  )
};
export default CommentsContainer;
