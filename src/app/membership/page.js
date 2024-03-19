import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
import {buttonStyle} from "@/components/globalStyles.js";
export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <p> welcom to membership</p>

      <p>
        shoudl have form to fill out if interested in membership and wanting to
        talk to someone
      </p>
      <a href="https://www.google.com" target="_blank" style={buttonStyle}>About DAO</a>
      <Footer />
    </>
  );
}
