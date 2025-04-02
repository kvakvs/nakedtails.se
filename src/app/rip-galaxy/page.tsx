import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import galaxy from "./images/galaxy-1.jpg";
import galaxy2 from "./images/galaxy-2.jpg";
import galaxy3 from "./images/galaxy-3.jpg";
import galaxy4 from "./images/galaxy-4.jpg";

export default function RipGalaxy() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Galaxy of Neytiri</h1>
        <p>
          Our beloved cat. Deceased after a long battle with cancer. We hope,
          that she lived a happy life.
        </p>
        <p>Imported from Germany from Cattery Of Neytiri</p>
        <p>Date of birth: 2013-12-02.</p>
        <p>Died: 2019-10-17</p>
        <p>Race and color: DSP g (blue tortie) naked</p>
        <Image src={galaxy} alt="Galaxy" />
        <Image src={galaxy2} alt="Galaxy" />
        <Image src={galaxy3} alt="Galaxy" />
        <Image src={galaxy4} alt="Galaxy" />
      </main>
      <Footer />
    </div>
  );
}
