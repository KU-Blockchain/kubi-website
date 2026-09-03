"use client";

import { useEffect } from "react";
import ErrorScreen, { ErrorRetryButton } from "@/components/ErrorScreen";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorScreen
      code="500"
      title="Something went wrong"
      message="An unexpected error hit this page. You can try again, or head back home while we sort it out."
      primaryHref="/"
      primaryLabel="Back to home"
      secondaryAction={<ErrorRetryButton onClick={reset} />}
    />
  );
}
