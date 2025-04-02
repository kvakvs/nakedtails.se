import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import kiona from "./images/kiona-1.jpg";
import kiona2 from "./images/kiona-2.jpg";
import kiona3 from "./images/kiona-3.jpg";
import kiona4 from "./images/kiona-4.jpg";
import kiona5 from "./images/kiona-5.jpg";

export default function RipKiona() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Kiona MIF*RU</h1>
        <p>Our beloved cat. Deceased.</p>
        <p>
          Imported from Germany. Born in MIF cattery in Russia (Rostov-on-Don),
          where Don Sphynx cat race originally came from.
        </p>
        <p>Breeder — Iryna Nemykina.</p>
        <p>Date of birth: 2011-12-21.</p>
        <p>Died: 2022-11-18</p>
        <p>Race and color: DSP a 09 (blue with white) brush</p>
        <Image unoptimized src={kiona} alt="Kiona" />
        <Image unoptimized src={kiona2} alt="Kiona" />
        <Image unoptimized src={kiona3} alt="Kiona" />
        <Image unoptimized src={kiona4} alt="Kiona" />
        <Image unoptimized src={kiona5} alt="Kiona" />
      </main>
      <Footer />
    </div>
  );
}
