import Image from "next/image";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <p>Welcome to KUBI web</p>
      <div id="about">
        <p> this section will talk about our mission and ethos</p>
      </div>
    </>
  );
}
