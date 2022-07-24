import { profile } from "console";

export interface Tweet extends TweetBody {
  __id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

export type TweetBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string;
};

export type CommentBody = {
  comment: string;
  tweetId: string;
  username: string;
  profileImg: string;
};

export interface Comment extends CommentBody {
  __id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  tweet: {
    _ref: string;
    _type: "reference";
  };
}
