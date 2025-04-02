import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";

export default function FemalesDiva() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Diva MIF*RU</h1>
        <p>
          Born in MIF cattery in Russia (Rostov-on-Don), where Don Sphynx cat
          race originally came from.
        </p>
        <p>Breeder — Iryna Nemykina. </p>
        <p>Date of birth: 2020-08-08.</p>
      </main>
      <Footer />
    </div>
  );
}
