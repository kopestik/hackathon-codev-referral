import AppContent from "./AppContent";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import useDarkMode from "use-dark-mode";
import { ToastContainer } from "./components/ToastContainer/ToastContainer";

const App = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  });
  const isDarkMode = darkMode.value;

  const onThemeSwitch = () => {
    darkMode.toggle();
  };

  return (
    <main id="main">
      <div className="container mx-auto max-w-7xl px-6 flex-grow text-foreground py-12">
        <div className="flex justify-end">
          <ThemeSwitcher isDark={!isDarkMode} onThemeSwitch={onThemeSwitch} />
        </div>
        <AppContent />
        <ToastContainer />
      </div>
    </main>
  );
};

export default App;
