import styles from "./header.module.css";
import MenuBar from "./menubar";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl font-bold">Naked Tails cattery</h1>
          <div className="flex items-center gap-4">
            <div className={styles.titleSmall}>
              Don Sphynx cats in Stockholm, Sweden
            </div>
            <ThemeToggle />
          </div>
        </div>
        <div className={styles.topBanner}></div>
        <div className="flex flex-row w-full justify-between">
          <MenuBar />
        </div>
      </div>
    </header>
  );
};
