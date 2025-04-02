import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import tango from "./images/tango-1.jpg";
import tango2 from "./images/tango-2.jpg";
import tango3 from "./images/tango-3.jpg";
import tango4 from "./images/tango-4.jpg";
import tango5 from "./images/tango-5.jpg";
import tango6 from "./images/tango-6.jpg";

export default function RipTango() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Tango MIF*RU</h1>
        <p>Our beloved cat. Deceased.</p>
        <p>
          Imported from MIF cattery in Russia (Rostov-on-Don), where Don Sphynx
          cat race originally came from.
        </p>
        <p>Breeder — Iryna Nemykina.</p>
        <p>Date of birth: 2013-11-25</p>
        <p>Died: 2017-12-02</p>
        <Image unoptimized src={tango} alt="Tango" />
        <Image unoptimized src={tango2} alt="Tango" />
        <Image unoptimized src={tango3} alt="Tango" />
        <Image unoptimized src={tango4} alt="Tango" />
        <Image unoptimized src={tango5} alt="Tango" />
        <Image unoptimized src={tango6} alt="Tango" />
      </main>
      <Footer />
    </div>
  );
}
