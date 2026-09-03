import { notFound } from "next/navigation";
import ErrorDemoClient from "./ErrorDemoClient";

export default function ErrorDemoPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <ErrorDemoClient />;
}
