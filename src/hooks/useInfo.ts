import { useContext } from "react";
import { InfoContext } from "../context/InfoProvider";

export default function useInfo() {
  return useContext(InfoContext);
}
