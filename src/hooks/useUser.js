
import { useContext } from "react";
import { AuthContext } from "../app/providers/AuthContext";

export default function useUser() {
  const context = useContext(AuthContext);
  return context;
}
