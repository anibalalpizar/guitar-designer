import { useContext } from "react";
import { GuitarBodyContext } from "../context/GuitarBodyContext";

export const useGuitarBodyContext = () => {
  const context = useContext(GuitarBodyContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
