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
          objectFit: "cover",
        }}
        spinnerContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        closeCallback={() => {
          console.log("clicked");
        }}
        textContainerStyle={{
          height: "350px",
        }}
        showLoader={true}
      />
    </div>
  );
}

const stories2 = [
  // {
  //   url: "https://picsum.photos/1080/1920",
  //   header: {
  //     heading: "Lorem ipsum dolor sit amet consectetur",
  //     subheading: "adipisicing elit lorem Lorem ipsum dolor sit amet",
  //     profileImage: "https://picsum.photos/100/100",
  //   },
  // },
  {
    url: "https://api.vistory.in/assets/images/stories/Story_Jeetendra_002.jpg",
    header: {
      heading: "Loren Ispum dolar",
    },
  },
];

export default App;
