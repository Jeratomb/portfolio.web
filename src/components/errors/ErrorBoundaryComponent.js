import React from "react";
import { FallbackProps } from "react-error-boundary";

export function FetchingError(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;
  return (
    <div className="App-main">
      <h1>An error occurs!</h1>
      <p>{error.message}</p>
    </div>
  );
}
