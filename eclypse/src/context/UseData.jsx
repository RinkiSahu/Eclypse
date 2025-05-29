import { useContext } from "react";
import { DataContext } from "./DataContext"; // Import the context

export const useData = () => useContext(DataContext)