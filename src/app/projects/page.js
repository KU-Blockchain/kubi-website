import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <p> welcom to projects</p>
      <p>
        {" "}
        here we will have a list of all past and present projects and link to
        each page
      </p>
      <div style={styles.projectCard}>
        <p>example: here is some info about the DAO project</p>
        <SolidColorButton title="Learn More" link="/projects/DAO" />
      </div>
    </>
  );
}

const styles = {
  projectCard: {
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "navyblue",
    color: "white",
    outline: "none",
    transition: "0.3s",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
};
