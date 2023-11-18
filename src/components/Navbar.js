"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import OutlineButton from "./OutlineButton";
import styles from "./Navbar.module.css"; // Import the CSS module
import Image from "next/image";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src="/images/homeButton.png" width="70" height="70" />
      </Link>

      <div className={isDrawerOpen ? styles.drawer : styles.rightMenu}>
        <Link href="/#about" className={styles.drawerItem}>
          <OutlineButton title="about" />
        </Link>
        <Link href="/projects" className={styles.drawerItem}>
          <OutlineButton title="projects" />
        </Link>
        <Link href="/events" className={styles.drawerItem}>
          <OutlineButton title="events" />
        </Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setDrawerOpen(!isDrawerOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
