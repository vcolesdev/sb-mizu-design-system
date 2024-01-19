import { useState } from "react";

// @todo - Update any types
export default function useAlert(expanded: boolean) {
  const initialState = expanded;
  const [showAlert, setShowAlert] = useState(initialState);

  const toggleAlert = (expanded: boolean) => {
    setShowAlert(expanded);
  };

  const handleOpenAlert = (event: any) => {
    event.preventDefault();
    if (!showAlert) toggleAlert(!showAlert);
    console.log("handleOpenAlert");
  };

  const handleCloseAlert = (event: any) => {
    event.preventDefault();
    if (showAlert) toggleAlert(!showAlert);
    console.log("handleCloseAlert");
  };

  const handleToggleAlert = (event: any) => {
    event.preventDefault();
    setShowAlert(!showAlert);
    console.log("handleToggleAlert");
  };

  return {
    handleCloseAlert,
    handleOpenAlert,
    handleToggleAlert,
    setShowAlert,
    showAlert,
  };
}
