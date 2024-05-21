import React from "react";
import "./Stories.css";
import img_1 from "../../assets/Dummy/Stories/listen_music.jpg";
import img_2 from "../../assets/Dummy/Stories/family_recipe.jpg";
import img_3 from "../../assets/Dummy/Stories/45943.jpg";

import StoriesCard from "../StoriesCard/StoriesCard";
const stories = [
  {
    image: img_3,
    title: "Meet Ruru",
    story: "Meet the amazing woman behind the brand",
  },
  {
    image: img_2,
    title: "Teghese Family Recipes",
    story:
      "The holiday season is a time when we come together with family and friends",
  },
  {
    image: img_1,
    title: "Our Relationship with Music",
    story: "See the playlists that inspire our collections",
  },
];
const Stories = () => {
  return (
    <div className="stories">
      <h1 className="stories-title ">Stories</h1>
      <h2 className=" stories-description">
        discover our staff, friends & partners
      </h2>
      <div className="stories-cards">
        {stories.map((story, index) => {
          return (
            <StoriesCard
              key={index}
              image={story.image}
              title={story.title}
              story={story.story}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
