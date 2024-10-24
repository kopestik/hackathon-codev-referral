import { Tab, Tabs } from "@nextui-org/tabs";
import { ReferralTab } from "./tabs/ReferralsTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WidgetContainer } from "./components/TotalNumberWidget/WidgetContainer";
import { SearchJobPostingModal } from "./components/SearchJobPostingModal";
import { useState } from "react";
import { Button } from "@nextui-org/react";

function App() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow text-foreground py-12">
      <div className="flex w-full flex-col">
        <WidgetContainer />
        <Button className="w-56" color="primary" onClick={() => setShowSearchModal(true)}  >
          Open Search Modal
        </Button>
        <SearchJobPostingModal isOpen={showSearchModal} onOpenChange={setShowSearchModal} />
        <Tabs aria-label="Options">
          <Tab key="referrals" title="Referrals">
            <ReferralTab />
          </Tab>
          <Tab key="rewards" title="Rewards">
            <RewardsTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
