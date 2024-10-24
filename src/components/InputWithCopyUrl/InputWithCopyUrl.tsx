import { Snippet } from "@nextui-org/react";
import { Copy } from "lucide-react";

export const InputWithCopyUrl = ({ url }: InputWithCopyUrlProps) => {
  return (
    <Snippet symbol="" copyIcon={<Copy size={16} />}>
      {url}
    </Snippet>
  );
};

interface InputWithCopyUrlProps {
  url: string;
}
