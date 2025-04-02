import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import bolero from "./images/bolero-1.jpg";
import bolero2 from "./images/bolero-2.jpg";

export default function RipBolero() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Bolero Nine Lives</h1>
        <p>
          Our beloved cat. <strong>Deceased.</strong>
        </p>
        <p>Imported from Ukraine.</p>
        <p>Date of birth: 2012-02-23</p>
        <p>Died: 2014-04-30</p>
        <p>Race and color: DSP a (blue) naked</p>
        <p>Champion in FIFE</p>

        <Image src={bolero} alt="Bolero" />
        <Image src={bolero2} alt="Bolero" />
      </main>
      <Footer />
    </div>
  );
}
