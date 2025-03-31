import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import caligula1 from "./images/img_20180509_144156.jpg";
import caligula2 from "./images/img_20180509_144459.jpg";
import caligula3 from "./images/img_20180509_144939.jpg";
import caligula4 from "./images/img_20180518_162540.jpg";
import caligula5 from "./images/img_20180518_162550.jpg";

export default function MalesCaligula() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Caligula MIF*RU</h1>

        <p>
          Pack leader. Imported from MIF cattery in Russia (Rostov-on-Don),
          where Don Sphynx cat race originally came from.{" "}
        </p>
        <p>Breeder — Iryna Nemykina.</p>
        <ul>
          <li>Date of birth: 2017-01-18</li>
          <li>Race and color: DSP n (black) naked</li>
          <li>FeLV/FIP/FIV — negative</li>
          <li>Bloodgroup A</li>
        </ul>
      </main>
      <Image src={caligula1} alt="Caligula" />
      <Image src={caligula2} alt="Caligula" />
      <Image src={caligula3} alt="Caligula" />
      <Image src={caligula4} alt="Caligula" />
      <Image src={caligula5} alt="Caligula" />
      <Footer />
    </div>
  );
}
