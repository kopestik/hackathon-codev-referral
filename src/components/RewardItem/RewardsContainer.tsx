import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { RewardItem } from "./RewardItem";
import { useState } from "react";
import useAxios from "../../utils/useAxios";

export const RewardsContainer = () => {
  const { data, loading } = useAxios("/referrals/rewards");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<null | unknown>(
    null
  );

  return (
    <>
      {data && !loading ? (
        <>
          <div className="grid grid-cols-4 gap-5 gap-y-12">
            {data.map(({ id, name, points, imageUrl }: Item) => (
              <RewardItem
                key={id}
                name={name}
                points={points}
                image={imageUrl}
                action={() => setIsConfirmationOpen({ name, points })}
              />
            ))}
          </div>
          <Divider className="my-8" />
          <span className="text-2xl">Conversion</span>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {conversion.map(({ name, points, image }) => (
              <RewardItem
                key={name}
                name={name}
                points={points}
                image={image}
                action={() => setIsConfirmationOpen({ name, points })}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <Spinner label="Loading..." />
        </div>
      )}

      <ConfirmationModal
        isOpen={Boolean(isConfirmationOpen)}
        onOpenChange={setIsConfirmationOpen}
      />
    </>
  );
};

const ConfirmationModal = ({
  isOpen,
  onOpenChange,
}: confirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              You claimed a Playstation 5 Disc
            </ModalHeader>
            <ModalBody>
              HR Team will contact you for processing and delivery
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Acknowledge
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

type Item = {
  id: number;
  name: string;
  description: string;
  points: number;
  imageUrl: string;
};
interface confirmationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const conversion = [
  {
    name: "Points to Cash",
    points: "999",
    image: `https://picsum.photos/id/10/200/300`,
  },
  {
    name: "Points to PTO",
    points: "999",
    image: `https://picsum.photos/id/11/200/300`,
  },
];
