import { useImpacterScoreSection } from "../hooks/useImpacterScoreSection";


export const useOverView = () => {
  const { impacterSocreState } = useImpacterScoreSection();

  return {
    impacterSocreState: impacterSocreState,
  };
};
