import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h2 style={styles.centeredTitle}>Welcome to KUBI web</h2>
      <div id="about">
        <p> this section will talk about our mission and ethos</p>
        <div style={styles.icon}>
          <Link href="https://github.com/KU-Blockchain">
            <Image src="/images/icons/githubLogo.png" width="70" height="70" />
          </Link>
        </div>
        <div style={styles.icon}>
          <Link href="https://www.linkedin.com/company/kublockchain/">
            <Image
              src="/images/icons/linkedinLogo.png"
              width="70"
              height="70"
            />
          </Link>
        </div>
        <p>
          in addition to linkedin and github we want join discord, medium, etc.
        </p>
      </div>
    </>
  );
}

const styles = {
  icon: {
    margin: "50px",
  },

  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
  },
};
