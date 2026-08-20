import React, { createContext, useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SolidColorButton from "@/components/SolidColorButton";
import styles from "@/styles/Navbar.module.css";
import { Image, Box, Text, IconButton, Flex, HStack, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsDiscord, BsFillEnvelopeFill, BsTwitterX } from 'react-icons/bs';
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { colors } from "@/styles/theme.js";
import SiteBackdrop from "@/components/ui/SiteBackdrop";

const navItems = [
  { path: '/about', title: 'About' },
  { path: '/projects', title: 'Projects' },
  { path: '/membership', title: 'Membership' },
  { path: '/events', title: 'Events' },
  { path: '/dao', title: 'DAO' }
];

const Layout = createContext();

const Navbar = ({ isMobile, isHome }) => {
    const pathname = usePathname();

    return (
        <nav className={`${styles.navbar} ${styles.navbarHome}`}>
            <Link href="/">
                <Image
                src="/images/WebsiteAssets/KUBI_Logos/kubi_white_logo.png"
                width="96px"
                alt="KUBI Logo"
                />
            </Link>

            {isMobile ? (
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton
                                isActive={isOpen}
                                as={IconButton}
                                icon={isOpen ? <SmallCloseIcon color="white" boxSize={5}/> : <HamburgerIcon color="white" />}
                                variant='outline'
                                borderWidth={1}
                                borderColor='whiteAlpha.400'
                                _hover={{ bg: 'whiteAlpha.200'}}
                                _expanded={{ bg: 'whiteAlpha.200'}}
                            />
                            <MenuList
                                bg='white'
                                borderColor={colors.steel}
                                borderRadius="16px"
                                py={2}
                            >
                                {navItems.map(item => (
                                    <MenuItem
                                      key={item.title}
                                      as={Link}
                                      bg="white"
                                      color={colors.navy}
                                      fontWeight={pathname === item.path ? "700" : "500"}
                                      _hover={{ bg: colors.ice }}
                                      href={item.path}
                                    >
                                    {item.title}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </>
                    )}
                </Menu>
            ) : (
            <div className={styles.rightMenu}>
                {navItems.map(item => (
                    <Link key={item.title} href={item.path}>
                    <SolidColorButton
                      title={item.title}
                      className={pathname === item.path ? styles.navActive : ""}
                    />
                    </Link>
                ))}
            </div>
            )}
        </nav>
    );
}

const Footer = ({ isMobile }) => {
    return (
        <footer>
            <Box
              mt={0}
              bg="transparent"
              color="white"
              borderTop="1px solid rgba(255,255,255,0.08)"
              position="relative"
              zIndex={1}
              px={isMobile ? 4 : "1.25in"}
            >
            <Container maxW="100%" px={0} py={isMobile ? 10 : 14}>
                <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }}>
                <Flex
                  direction={isMobile ? "column" : "row"}
                  justify="space-between"
                  align={isMobile ? "center" : "flex-start"}
                  gap={10}
                  textAlign={isMobile ? "center" : "left"}
                >
                    <VStack spacing={4} align={isMobile ? "center" : "flex-start"} maxW="320px">
                        <Image width="120px" alt="KUBI Logo" src="/images/WebsiteAssets/KUBI_Logos/kubi_white_logo.png"/>
                        <Text color={colors.steel} fontSize="sm" lineHeight="1.7">
                          Student-led blockchain research, education, and development at the University of Kansas.
                        </Text>
                    </VStack>

                    <VStack spacing={3} align={isMobile ? "center" : "flex-start"}>
                        <Text fontWeight="700" letterSpacing="0.08em" fontSize="xs" textTransform="uppercase" color={colors.steel}>
                          Explore
                        </Text>
                        {navItems.map((item) => (
                          <Link key={item.path} href={item.path}>
                            <Text _hover={{ color: "white" }} color={colors.ice} fontSize="sm">{item.title}</Text>
                          </Link>
                        ))}
                    </VStack>

                    <VStack spacing={4} align={isMobile ? "center" : "flex-start"}>
                        <Text fontWeight="700" letterSpacing="0.08em" fontSize="xs" textTransform="uppercase" color={colors.steel}>
                          Connect
                        </Text>
                        <HStack spacing={3}>
                            <Link href="https://github.com/KU-Blockchain">
                                <IconButton variant='outline' borderColor="whiteAlpha.400" color="white" _hover={{ bg: colors.blue, borderColor: colors.blue }} aria-label="Github" icon={<BsGithub />} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/kublockchain/">
                                <IconButton variant='outline' borderColor="whiteAlpha.400" color="white" _hover={{ bg: colors.blue, borderColor: colors.blue }} aria-label="Linkedin" icon={<BsLinkedin />} />
                            </Link>
                            <Link href="https://x.com/kublockchain">
                                <IconButton variant='outline' borderColor="whiteAlpha.400" color="white" _hover={{ bg: colors.blue, borderColor: colors.blue }} aria-label="Twitter" icon={<BsTwitterX />} />
                            </Link>
                            <Link href="https://discord.gg/GAznpHUzny">
                                <IconButton variant='outline' borderColor="whiteAlpha.400" color="white" _hover={{ bg: colors.blue, borderColor: colors.blue }} aria-label="Discord" icon={<BsDiscord />} />
                            </Link>
                            <Link href="mailto:ku.blockchain.institute@gmail.com">
                                <IconButton variant='outline' borderColor="whiteAlpha.400" color="white" _hover={{ bg: colors.blue, borderColor: colors.blue }} aria-label="Email" icon={<BsFillEnvelopeFill />} />
                            </Link>
                        </HStack>
                    </VStack>
                </Flex>
                <Text mt={10} color={colors.steel} fontSize="sm" align="center">
                  Made with 🔥 by the University of Kansas Blockchain Institute
                </Text>
                </motion.div>
            </Container>
            </Box>
        </footer>
    );
}

export const LayoutProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 870);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (
        <Layout.Provider value={isMobile}>
            <SiteBackdrop />
            <Navbar isMobile={isMobile} isHome={isHome} />

            <Box
              position="relative"
              zIndex={1}
              minH={isHome ? "auto" : "70vh"}
              w="100%"
              {...(isHome
                ? { p: 0 }
                : { px: isMobile ? 4 : "1.25in", pt: isMobile ? "110px" : "120px", pb: 10 })}
            >
                {children}
            </Box>

            <Footer isMobile={isMobile} />
        </Layout.Provider>
    );
}

export const useLayout = () => useContext(Layout);
