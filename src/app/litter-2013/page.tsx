import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import lena1 from "./images/lena-5.jpeg";
import lena2 from "./images/lena-4.jpeg";
import lana1 from "./images/img_6724.jpg";

export default function Litter2013() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Litter L 2013</h1>
        <p>Date of birth: 2013-03-31</p>

        <p>Mother: Black Diamond Vivien</p>
        <p>Father: Bolero Nine Lives</p>

        <p>Kittens: 2 female</p>

        <p>Lena — SOLD</p>
        <p>Lana — SOLD</p>

        <ul>
          <li>
            Lena (female) DSP a (blue) flock. Moved to her new home in Sweden.
          </li>
        </ul>
        <Image src={lena1} alt="Kittens: Lena" />
        <Image src={lena2} alt="Kittens: Lena" />

        <ul>
          <li>
            Lana (female) DSP a (blue) naked. Travels between Sweden & USA with
            her owners.
          </li>
        </ul>
        <Image src={lana1} alt="Kittens: Lana" />
      </main>
      <Footer />
    </div>
  );
}
