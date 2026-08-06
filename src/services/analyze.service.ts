import api from "./services";
import { type AnalysisResult } from "../types/AnalysisTypes";

export const analyzeInitialPetition = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);
  const response = await api.post<AnalysisResult>("/process", formData);
  console.log(response);
  return response;
};
