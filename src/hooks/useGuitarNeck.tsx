import { useContext } from "react";
import { GuitarNeckContext } from "../context/GuitarNeckContext";

export const useGuitarNeckContext = () => {
  const context = useContext(GuitarNeckContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
