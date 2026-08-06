import api from "./services";

export const analyzeInitialPetition = (text: string) => {
  const response = api.post(text);
  return response;
};
