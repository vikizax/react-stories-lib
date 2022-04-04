import React from "react";
import { HeaderProps } from "./../interfaces";

const Header = ({ profileImage, heading, subheading }: HeaderProps) => (
  <div style={styles.main}>
    {profileImage && (
      <div style={styles.imageContainer}>
        <img style={styles.img} src={profileImage} />
      </div>
    )}
    <div style={styles.text}>
      <p style={styles.heading}>{heading}</p>
      <p style={styles.subheading}>{subheading}</p>
    </div>
  </div>
);

const styles = {
  main: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
    border: "2px solid rgba(255, 255, 255, 0.8)",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))",
    padding: "10px",
    textAlign: "justify",
    overflow: "auto",
  },
  heading: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    margin: 0,
    marginBottom: 2,
  },
  subheading: {
    fontSize: "0.6rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0,
  },
  imageContainer: {
      padding: '10px'
  }
};

export default Header;
