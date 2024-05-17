"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SolidColorButton from "./SolidColorButton";
import styles from "./Navbar.module.css";
import { Image } from "@chakra-ui/react";

const navItems = [
  { path: '/about', title: 'About' },
  { path: '/projects', title: 'Projects' },
  { path: '/membership', title: 'Membership' },
  { path: '/events', title: 'Events' },
  { path: '/research', title: 'Research@KU' }
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/images/WebsiteAssets/KUBI_Logos/white_logo.png"
          width="5lh"
          alt="KUBI Logo"
        />
      </Link>

      {isMobile ? (
        <div
          className={styles.hamburger}
          onClick={() => setDrawerOpen(!isDrawerOpen)}
        >
          <span style={{ color: "white" }}>{isDrawerOpen ? "X" : "☰"}</span>
        </div>
      ) : (
      <div className={styles.rightMenu}>
        {navItems.map(item => (
            <Link key={item.title} href={item.path}>
              <SolidColorButton title={item.title} />
            </Link>
          ))}
      </div>
      )}

      {isMobile && isDrawerOpen && (
        <div className={isDrawerOpen ? styles.drawer : styles.rightMenu}>
          {navItems.map(item => (
            <Link key={item.title} className={styles.drawerItem} href={item.path} onClick={() => setDrawerOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
