import React from "react";

export const Pin = ({ maxChar }) => {
  return <input data-testid="pin-input" maxLength={maxChar} />;
};

// Check maxChar prop here
