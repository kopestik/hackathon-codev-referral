import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export const ApplyModal = ({ isOpen, onOpenChange }: ApplyModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Fillup Form
            </ModalHeader>
            <ModalBody>
              <form className="flex flex-col gap-2">
                <Input type="url" label="URL" placeholder="Enter URL" />
                <Input type="text" label="Name" placeholder="Enter your name" />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Apply
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

interface ApplyModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
