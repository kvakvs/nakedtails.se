import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import kittens1 from "./images/dsc18851.jpg";
import alex1 from "./images/dsc19651.jpg";
import axel1 from "./images/dsc19221.jpg";
import anton1 from "./images/dsc19001.jpg";
import aston1 from "./images/dsc19741.jpg";

export default function Litter2015() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Litter A 2015</h1>
        Date of birth: 2015-03-03
        <p>Mother: Black Diamond Vivien</p>
        <p>Father: Tango MIF*RU</p>
        <p>Kittens: 4 male</p>
        <p>Alex — SOLD</p>
        <p>Axel — SOLD</p>
        <p>Aston — SOLD</p>
        <p>Anton — SOLD</p>
        <Image unoptimized src={kittens1} alt="Kittens: Litter A 2015" />
        <ul>
          <li>
            Alex Naked Tails (male) DSP n (black) naked. Moved to his new home
            in Sweden.
          </li>
        </ul>
        <Image unoptimized src={alex1} alt="Kittens: Alex" />
        <ul>
          <li>
            Axel Naked Tails (male) DSP n (black) naked. Moved to his new home
            in Sweden.
          </li>
        </ul>
        <Image unoptimized src={axel1} alt="Kittens: Axel" />
        <ul>
          <li>
            Anton Naked Tails (male) DSP n (black) flock. Moved to his new home
            in Sweden.
          </li>
        </ul>
        <Image unoptimized src={anton1} alt="Kittens: Anton" />
        <ul>
          <li>
            Aston Naked Tails (male) DSP n (black) naked. Moved to his new home
            in Sweden.
          </li>
        </ul>
        <Image unoptimized src={aston1} alt="Kittens: Aston" />
      </main>
      <Footer />
    </div>
  );
}
