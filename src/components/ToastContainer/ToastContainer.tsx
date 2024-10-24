import { useEffect } from "react";
import { toast, Toaster } from "sonner";
import { ToastLayout } from "../ToastLayout";
import { ITEMS } from "../../utils/constants";
import { faker } from "@faker-js/faker";
import useDarkMode from "use-dark-mode";

export const ToastContainer = () => {
  const darkMode = useDarkMode();
  useEffect(() => {
    const id = setInterval(() => {
      const referrer = faker.person.fullName();
      const itemIndex = Math.floor(Math.random() * ITEMS.length + 1);
      const image = ITEMS[itemIndex].imageUrl;
      const item = ITEMS[itemIndex].name;

      toast.custom(
        (t) => (
          <ToastLayout
            referrer={referrer}
            image={image}
            item={item}
            onClick={() => {
              toast.dismiss(t);
            }}
          />
        ),
        { duration: 10000 }
      );
    }, 35000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return <Toaster theme={darkMode.value ? "dark" : "light"} />;
};
