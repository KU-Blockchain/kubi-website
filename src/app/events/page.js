import React from "react";
import Navbar from "@/components/Navbar";
import { Center } from "@chakra-ui/react";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <p> welcom to events</p>
      <p> should have calendar with upcoming events</p>
      <Center>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FChicago&bgcolor=%23ffffff&showTz=0&mode=WEEK&src=dGVqYWFkaXR5YS5nQGdtYWlsLmNvbQ&src=ZmJmYzA3ODk1OGM4NDhiMDk4NzBjMTY1OTdkZTBjNDQwNjMzYmIxZjM2ZTA0YzQwZjQ1OTQyMzUyMTc5OGVkNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=a3UuYmxvY2tjaGFpbi5pbnN0aXR1dGVAZ21haWwuY29t&color=%2333B679&color=%237986CB&color=%23616161" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </Center>
      
      <p> should have highlights of past events</p>
    </>
  );
}
