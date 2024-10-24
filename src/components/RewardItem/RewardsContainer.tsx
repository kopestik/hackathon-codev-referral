import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { RewardItem } from "./RewardItem";
import { useState } from "react";

export const RewardsContainer = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<null | unknown>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-5 gap-y-12">
        {items.map(({ name, points, image }) => (
          <RewardItem
            name={name}
            points={points}
            image={image}
            action={() => setIsConfirmationOpen({ name, points })}
          />
        ))}
      </div>

      <Divider className="my-8" />

      <span className="text-2xl">Conversion</span>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {conversion.map(({ name, points, image }) => (
          <RewardItem
            name={name}
            points={points}
            image={image}
            action={() => setIsConfirmationOpen({ name, points })}
          />
        ))}
      </div>

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

interface confirmationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const items = [
  {
    name: "Playstation 5 Disc",
    points: "1,000",
    image: `https://picsum.photos/id/1/200/300`,
  },
  {
    name: "Steam Deck Oled",
    points: "1,500",
    image: `https://picsum.photos/id/2/200/300`,
  },
  {
    name: "Tesla Cybertruck LTD",
    points: "50,000",
    image: `https://picsum.photos/id/3/200/300`,
  },
  {
    name: "Surly Midnight Special",
    points: "2,500",
    image: `https://picsum.photos/id/4/200/300`,
  },
  {
    name: "Specialized Chisel HT",
    points: "3,000",
    image: `https://picsum.photos/id/5/200/300`,
  },
  {
    name: "Nike Vaporfly 3 LE",
    points: "500",
    image: `https://picsum.photos/id/6/200/300`,
  },
  {
    name: "Macbook Pro 16 M3",
    points: "3,000",
    image: `https://picsum.photos/id/7/200/300`,
  },
  {
    name: "House & Lot 500sqm",
    points: "35,000",
    image: `https://picsum.photos/id/8/200/300`,
  },
  {
    name: "Trip to Japan 3D",
    points: "10,000",
    image: `https://picsum.photos/id/9/200/300`,
  },
];

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
