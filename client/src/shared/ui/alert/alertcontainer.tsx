import { useContext } from "react";
import { AlertProvider, AlertContext } from "./alertprovider.tsx";
import {Alert} from "./alert.tsx";

// create hook to be used globally to toggle alert component.
export const useAlert = () => useContext(AlertContext);

export const AlertContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AlertProvider>
      <Alert />
      {children}
    </AlertProvider>
  );
};

 