import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";

export default function RipGalaxy() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Galaxy of Neytiri</h1>
      </main>
      <Footer />
    </div>
  );
}
