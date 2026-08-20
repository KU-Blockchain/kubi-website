"use client";

import React from "react";
import PersonAccordion from "./PersonAccordion";

const people = [
  {
    headshot: "/images/headshots/emma_nasseri.jpeg",
    title: "Former President",
    name: "Emma Nasseri",
    shortBio: "Emma is a former Honors Computer Science and Visual Arts student and former President of the KU Blockchain Institute.",
    longBio:
      "Emma is a former Honors Computer Science and Visual Arts student and former President of the KU Blockchain Institute.",
  },
  {
    headshot: "/images/headshots/jennifer_lohoefener.jpeg",
    title: "Associate Director & Assistant Research Professor at I2S",
    name: "Dr. Jennifer Lohoefener",
    shortBio:
      "Dr. Lohoefener is KU Blockchain Institute's faculty advisor and a long-time supporter of blockchain research at the University of Kansas.",
    longBio:
      "Dr. Lohoefener is KU Blockchain Institute's advisor and a long-time supporter of blockchain research at the University of Kansas. She brings experience from both academia and industry, including work at Ad Astra and Mylo.",
  },
  {
    headshot: "/images/headshots/perry_alexander.jpeg",
    name: "Dr. Perry Alexander",
    title: "Distinguished Professor at The University of Kansas",
    shortBio:
      "AT&T Foundation Distinguished Professor and ITTC Director at The University of Kansas.",
    longBio:
      "AT&T Foundation Distinguished Professor and ITTC Director at The University of Kansas. Research and teaching interests include formal methods, remote attestation, program verification and synthesis, and languages. Currenting working on frameworks for establishing trust in remote systems. Still looking for my turntable remote.",
  },
];

const AdvisoryBoard = () => {
  return <PersonAccordion people={people} />;
};

export default AdvisoryBoard;
