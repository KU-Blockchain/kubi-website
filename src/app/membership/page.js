import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import SolidColorButton from "../../components/SolidColorButton";
import Footer from "@/components/footer";
export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <p> welcom to membership</p>

      <p>
        shoudl have form to fill out if interested in membership and wanting to
        talk to someone
      </p>
      <SolidColorButton title="About the DAO" link="/projects/DAO" />
      <Footer />
    </>
  );
}
