import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { Flame, Gem, Search } from "lucide-react";
import useAxios from "../../utils/useAxios";
import { useState } from "react";
import useDebounce from "../../utils/useDebounce";

export const SearchJobPostingModal = ({
  isOpen,
  onOpenChange,
  onClick,
}: Props) => {
  const { data, loading } = useAxios("/jobpostings");
  const [filteredData, setFilteredData] = useState(null);

  const handleInput = (query: string) => {
    const lowerCaseVal = query.toLowerCase();
    const newData = data.filter((jp: JobPosting) =>
      jp.title.toLowerCase().includes(lowerCaseVal)
    );
    setFilteredData(newData);
  };

  const debouncedInput = useDebounce(handleInput, 500);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Refer to Specific Job Posting
          </ModalHeader>
          <ModalBody className="pb-5">
            <Input
              type="search"
              onChange={(e) => debouncedInput(e.target.value)}
              placeholder="ex. Senior Software Engineer"
              startContent={
                <Search className="text-3xl pr-1 text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

            <Divider className="mt-1 px-4" />

            {data && !loading ? (
              <div>
                {(filteredData || data).map(
                  ({ id, title, isUrgent, maxPoints }: JobPosting) => (
                    <JobPosting
                      key={id}
                      id={id}
                      name={title}
                      isUrgent={isUrgent}
                      points={maxPoints}
                      onClick={onClick}
                    />
                  )
                )}
              </div>
            ) : (
              <Spinner label="Loading..." />
            )}

            {!filteredData && !loading && !data && <>No Job Posting Found</>}
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

const JobPosting = ({
  id,
  name,
  isUrgent,
  points,
  onClick,
}: JobPostingProps) => {
  const onJobPostingSelect = () => {
    onClick(id);
  };

  return (
    <div
      className="flex items-center gap-2 hover:bg-default-100 pl-2 pr-4 py-3 rounded-lg cursor-pointer"
      onClick={onJobPostingSelect}
    >
      {isUrgent && (
        <div>
          <Flame size={20} fill="currentColor" className="-mt-1 text-red-500" />
        </div>
      )}
      <div
        className={`${!isUrgent ? "pl-[25px]" : ""} flex items-center gap-2`}
      >
        {name}
      </div>
      <div className="flex-1 items-center gap-2 text-right">
        <Gem className="inline -mt-1 mr-1" size={16} />
        {points}
      </div>
    </div>
  );
};

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClick: (id: string | number) => void;
}

interface JobPostingProps {
  id: string | number;
  name: string;
  points: number;
  isUrgent: boolean;
  onClick: (id: string | number) => void;
}

interface Tier {
  id: number;
  name: string;
}

interface JobPosting {
  id: number;
  number: string;
  title: string;
  isUrgent: boolean;
  tier: Tier;
  link: string;
  maxPoints: number;
  maxCashIncentive: number;
}
