import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import vivien1 from "./images/dsc19891.jpg";
import vivien2 from "./images/img_8888.jpg";

export default function FemalesVivien() {
  const age = new Date().getFullYear() - 2011;
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Black Diamond Vivien</h1>
        <p>Imported from Ukraine. Mother of three litters and now retired.</p>
        <ul>
          <li>Date of birth: 2011-03-15 (age {age} years).</li>
          <li>Race and color: DSP a (blue) flock</li>
          <li>CH in ICFA</li>
          <li>FeLV/FIP/FIV — negative</li>
          <li>Bloodgroup A</li>
        </ul>
        <Image src={vivien1} alt="Black Diamond Vivien" />
        <Image src={vivien2} alt="Black Diamond Vivien" />
      </main>
      <Footer />
    </div>
  );
}
