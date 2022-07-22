import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2  col-span-2 hidden px-2 lg:inline">
      {/*Search */}
      <div className="mt-2 flex item-center space-x-2 bg-grat-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ReachMorpheus"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
