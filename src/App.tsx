import { Tab, Tabs } from "@nextui-org/tabs";
import { ReferralTab } from "./tabs/ReferralsTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WidgetContainer } from "./components/TotalNumberWidget/WidgetContainer";
import { PointsLeaderboard } from "./tabs/PointsLeaderboard";
import { ClaimHistory } from "./tabs/ClaimHistory";

function App() {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow text-foreground py-12">
      <div className="flex w-full flex-col">
        <WidgetContainer />
        <Tabs aria-label="Options" className="justify-center mb-6" size="lg">
          <Tab key="referrals" title="Referrals">
            <ReferralTab />
          </Tab>
          <Tab key="rewards" title="Rewards">
            <RewardsTab />
          </Tab>
          <Tab key="history" title="Claim History">
            <ClaimHistory />
          </Tab>
          <Tab key="leaderboard" title="Points Leaderboard">
            <PointsLeaderboard />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
