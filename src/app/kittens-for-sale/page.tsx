import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import expecting from "./images/img_20180531_093837.jpg";

export default function KittensForSale() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Kittens for Sale</h1>

        <Image
          unoptimized
          src={expecting}
          alt="Expecting... not expecting yet"
        />

        <p>
          At this time we do not have kittens for sale, but more may be coming.
          Our cats are working day and night on it!
        </p>

        <p>
          Please use the Contact Us form or follow our Instagram account{" "}
          <a href="https://www.instagram.com/naked_tails_cattery">
            @naked_tails_cattery
          </a>{" "}
          to stay in touch.
        </p>

        <p>We will let you know!</p>
      </main>
      <Footer />
    </div>
  );
}
