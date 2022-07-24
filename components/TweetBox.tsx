import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
function TweetBox() {
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex p-5 space-x-2">
      <img
        className="object-cover mt-4 rounded-full h-14 w-14"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        alt=""
      />
      <div className="flex items-center flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-4 w-full h-24 text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="w-5 h-5 transition-transform ease-out cursor-pointer from-neutral-150 hover:scale-150" />
              <SearchCircleIcon className="w-5 h-5" />
              <EmojiHappyIcon className="w-5 h-5" />
              <CalendarIcon className="w-5 h-5" />
              <LocationMarkerIcon className="w-5 h-5" />
            </div>

            <button
              disabled={!input}
              className="px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
