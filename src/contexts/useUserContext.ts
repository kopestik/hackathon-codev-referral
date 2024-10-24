import { useContext } from "react";
import { UserContext, UserContextSetter } from "./UserContext";

export const useUserContext = () => {
  const { referralLink, totalCashIncentive, totalPoints, totalReferrals } =
    useContext(UserContext) || {};
  const {
    setReferralLink,
    setTotalCashIncentive,
    setTotalPoints,
    setTotalReferrals,
  } = useContext(UserContextSetter) || {};

  return {
    referralLink,
    totalCashIncentive,
    totalPoints,
    totalReferrals,
    setReferralLink,
    setTotalCashIncentive,
    setTotalPoints,
    setTotalReferrals,
  };
};
