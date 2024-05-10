"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentExecTeam from "@/components/about_components/CurrentExecTeam";
import AdvisoryBoard from "@/components/about_components/AdvisoryBoard";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <CurrentExecTeam />
      <AdvisoryBoard />
      <p>should have info on our history</p>
      <p>should have info on our election process</p>
      <Footer />
    </>
  );
}
