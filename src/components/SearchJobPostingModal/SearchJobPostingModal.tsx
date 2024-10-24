import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Divider,
} from "@nextui-org/react";
import { Flame, Gem, Search } from "lucide-react";

const jobPostings = [
  { id: 1, name: "Senior React Developer", points: 300, isUrgent: true },
  { id: 2, name: "Junior Wordpress Developer", points: 300, isUrgent: true },
  { id: 3, name: "Marketing Associate", points: 300, isUrgent: true },
];

export const SearchJobPostingModal = ({
  isOpen,
  onOpenChange,
  onClick,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Refer to Specific Job Posting
          </ModalHeader>
          <ModalBody>
            <Input
              type="search"
              placeholder="ex. Senior Software Engineer"
              startContent={
                <Search className="text-3xl pr-1 text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

            <Divider className="mt-1 px-4" />

            <div>
              {jobPostings.map(({ id, name, isUrgent, points }) => (
                <JobPosting
                  id={id}
                  name={name}
                  isUrgent={isUrgent}
                  points={points}
                  onClick={onClick}
                />
              ))}
            </div>
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
      <div className="flex items-center gap-2">{name}</div>
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
