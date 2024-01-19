import React, { useState } from "react";

export const useAlert = (hasTitle: boolean | undefined, isActive: boolean | undefined) => {
  const initialState = isActive;
  const [showAlert, setShowAlert] = useState(initialState);

  const toggleAlert = (state: boolean) => {
    setShowAlert(state);
  };

  const handleShowAlert = (event: React.MouseEvent<any>) => {
    event.preventDefault();
    toggleAlert(!showAlert);
  };

  return {
    handleShowAlert,
    initialState,
    setShowAlert,
    showAlert,
    toggleAlert,
  };
};
