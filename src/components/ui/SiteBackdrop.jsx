import { Box } from "@chakra-ui/react";

export default function SiteBackdrop() {
  return (
    <Box position="fixed" inset={0} zIndex={0} pointerEvents="none" bg="#0A0A0C" overflow="hidden">
      <Box
        position="absolute"
        inset="-20%"
        bg="radial-gradient(ellipse 70% 50% at 72% 18%, rgba(27, 117, 208, 0.22), transparent 58%), radial-gradient(ellipse 50% 40% at 12% 88%, rgba(178, 58, 58, 0.1), transparent 55%), radial-gradient(ellipse 40% 30% at 50% 50%, rgba(142, 172, 205, 0.06), transparent 60%)"
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.18}
        backgroundImage="linear-gradient(rgba(215, 229, 240, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(215, 229, 240, 0.09) 1px, transparent 1px)"
        backgroundSize="72px 72px"
        maskImage="radial-gradient(ellipse at center, black 35%, transparent 78%)"
      />
    </Box>
  );
}
