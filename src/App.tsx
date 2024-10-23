import { Tab, Tabs } from "@nextui-org/tabs";
import { TotalNumberWidget } from "./components/TotalNumberWidget";
import { ReferralTab } from "./tabs/ReferralsTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { DollarSign, Gem, UsersRound } from "lucide-react";

function App() {
  return (
    <>
      <div className="flex space-x-4 m-5">
        <TotalNumberWidget icon={<Gem size="3em" />} label="Total Points" value="999" />
        <TotalNumberWidget icon={<DollarSign size="3em" />} label="Total Cash Incentives" value="999" />
        <TotalNumberWidget icon={<UsersRound size="3em" />} label="Total Referrals" value="999" />
        </div>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="referrals" title="Referrals">
            <ReferralTab />
          </Tab>
          <Tab key="rewards" title="Rewards">
            <RewardsTab />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
