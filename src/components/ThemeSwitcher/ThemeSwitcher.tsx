import { useSwitch, VisuallyHidden } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeSwitcher = ({
  isDark,
  onThemeSwitch,
}: ThemeSwitcherProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    defaultSelected: isDark,
    size: "lg",
    color: "success",
    onValueChange: onThemeSwitch,
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

interface ThemeSwitcherProps {
  isDark: boolean;
  onThemeSwitch: (isDarkMode: boolean) => void;
}
