import React from "react";
import "./App.css";
import Stories from "react-insta-stories";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Stories
        loop
        keyboardNavigation
        defaultInterval={8000}
        stories={stories2}
        storyContainerStyles={{
          borderRadius: 8,
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
        storyStyles={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        spinnerContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        closeCallback={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

const stories2 = [
  {
    url: "https://picsum.photos/1080/1920",
  },
  {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video",
  },
];

export default App;
