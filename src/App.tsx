import { Tab, Tabs } from "@nextui-org/tabs";
import { TotalNumberWidget } from "./components/TotalNumberWidget";
import { ReferralTab } from "./tabs/ReferralsTab";
import { RewardsTab } from "./tabs/RewardsTab";

function App() {
  return (
    <>
      <TotalNumberWidget />
      <TotalNumberWidget />
      <TotalNumberWidget />
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
