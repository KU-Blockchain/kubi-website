"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SolidColorButton from "./SolidColorButton";
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link href="/" style={{ marginLeft: "8%" }}>
        <Image
          src="/images/WebsiteAssets/KUBI Logos/white_logo.png"
          width="120"
          height="150"
          alt=""
        />
      </Link>

      <div className={isDrawerOpen ? styles.drawer : styles.rightMenu}>
        <Link href="/about" className={styles.drawerItem}>
          <SolidColorButton title="About" />
        </Link>
        <Link href="/projects" className={styles.drawerItem}>
          <SolidColorButton title="Projects" />
        </Link>
        <Link href="/membership" className={styles.drawerItem}>
          <SolidColorButton title="Membership" />
        </Link>
        <Link href="/events" className={styles.drawerItem}>
          <SolidColorButton title="Events" />
        </Link>
        <Link href="/resources" className={styles.drawerItem}>
          <SolidColorButton title="Resources" />
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
