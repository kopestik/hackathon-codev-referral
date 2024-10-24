import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import axios from "../../utils/axios";
import { toast } from "sonner";
import { REFERRAL_PREFIX } from "../../utils/constants";

interface ApplyFields extends HTMLFormControlsCollection {
  url: HTMLInputElement;
  name: HTMLInputElement;
  email: HTMLInputElement;
}
interface ApplyElements extends HTMLFormElement {
  readonly elements: ApplyFields;
}

export const ApplyModal = ({ isOpen, onOpenChange }: ApplyModalProps) => {
  const onSubmit = async (e: React.FormEvent<ApplyElements>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const url = elements.url.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const form = e.currentTarget;

    try {
      const response = await axios.post("/Applicant", {
        Applicant: {
          name,
          email,
        },
        ReferralLink: url.replace(REFERRAL_PREFIX, ""),
      });

      if (response.data) {
        form.reset();
        onOpenChange(false);
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong. Please try again.");
    }
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Fillup Form
              </ModalHeader>
              <ModalBody>
                <Input
                  type="url"
                  label="URL"
                  name="url"
                  placeholder="Enter URL"
                />
                <Input
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                />
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Apply
                </Button>
              </ModalFooter>
            </form>
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
