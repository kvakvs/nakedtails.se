import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import kittens1 from "./images/img_20180518_163328.webp";
import bulle1 from "./images/img_20180518_163125.jpg";
import bulle2 from "./images/img_20180518_163039.jpg";
import biscuit1 from "./images/img_20180516_154646.jpg";
import biscuit2 from "./images/img_20180523_165740.webp";

export default function Litter2018() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Litter B 2018</h1>

        <p>Date of birth: 2018-03-09</p>

        <p>Mother: Black Diamond Vivien</p>
        <p>Father: Caligula Mif*RU</p>

        <p>Kittens: 1 female, 1 male</p>

        <p>Bulle — SOLD</p>
        <p>Biscuit — SOLD</p>

        <Image src={kittens1} alt="Kittens: Litter B 2018" />

        <ul>
          <li>
            Bulle Naked Tails (female) DSP n (black) naked. Moved to her new
            home in Sweden.
          </li>
        </ul>
        <Image src={bulle1} alt="Kittens: Bulle" />
        <Image src={bulle2} alt="Kittens: Bulle" />

        <ul>
          <li>
            Biscuit Naked Tails (male) DSP n (black) naked. Moved to his new
            home in Sweden.
          </li>
        </ul>
        <Image src={biscuit1} alt="Kittens: Biscuit" />
        <Image src={biscuit2} alt="Kittens: Biscuit" />
      </main>
      <Footer />
    </div>
  );
}
