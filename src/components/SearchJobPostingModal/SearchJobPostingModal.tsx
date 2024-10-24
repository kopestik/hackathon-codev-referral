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
  "Senior React Developer",
  "Junior Wordpress Developer",
  "Marketing Associate",
];

export const SearchJobPostingModal = ({ isOpen, onOpenChange }: Props) => {
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
              {jobPostings.map((i) => (
                <UrgentJobPosting jobPosting={i} />
              ))}
            </div>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

const UrgentJobPosting = ({ jobPosting }: { jobPosting: string }) => {
  return (
    <div className="flex items-center gap-2 mb-1 hover:bg-default-100 px-4 py-3 rounded-lg cursor-pointer">
      <div>
        <Flame size={20} fill="currentColor" className="-mt-1 text-red-500" />
      </div>
      <div className="flex items-center gap-2">{jobPosting}</div>

      <div className="flex-1 items-center gap-2 text-right">
        <Gem className="inline -mt-1 mr-1" size={16} />
        300
      </div>
    </div>
  );
};

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
