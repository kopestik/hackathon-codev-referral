import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { EMAIL } from "../utils/constants";
import useAxios from "../utils/useAxios";

interface UserContextProps {
  referralLink: string;
  totalReferrals: number;
  totalPoints: number;
  totalCashIncentive: number;
}

interface UserContextSetterProps {
  setReferralLink: Dispatch<SetStateAction<string>>;
  setTotalReferrals: Dispatch<SetStateAction<number>>;
  setTotalPoints: Dispatch<SetStateAction<number>>;
  setTotalCashIncentive: Dispatch<SetStateAction<number>>;
}

export const UserContext = createContext<UserContextProps | null>(null);
export const UserContextSetter = createContext<UserContextSetterProps | null>(
  null
);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [referralLink, setReferralLink] = useState("");
  const [totalReferrals, setTotalReferrals] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [totalCashIncentive, setTotalCashIncentive] = useState<number>(0);
  const { data } = useAxios("/referrals/me/" + EMAIL);

  useEffect(() => {
    setReferralLink(data?.referralLink);
    setTotalReferrals(data?.totalReferrals);
    setTotalPoints(data?.totalPoints);
    setTotalCashIncentive(data?.totalCashIncentive);
  }, [
    data?.referralLink,
    data?.totalCashIncentive,
    data?.totalPoints,
    data?.totalReferrals,
  ]);

  return (
    <UserContext.Provider
      value={{ referralLink, totalReferrals, totalPoints, totalCashIncentive }}
    >
      <UserContextSetter.Provider
        value={{
          setReferralLink,
          setTotalReferrals,
          setTotalPoints,
          setTotalCashIncentive,
        }}
      >
        {children}
      </UserContextSetter.Provider>
    </UserContext.Provider>
  );
};

export { UserContextProvider };
