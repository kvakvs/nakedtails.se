import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-[32px] pt-8 row-start-2 items-center sm:items-start">
        <p>
          We are small private cattery located in Stockholm, Sweden. We have{" "}
          <a href="https://www.instagram.com/naked_tails_cattery/">Instagram</a>
          !
        </p>
        <p>
          Our cattery is registered in{" "}
          <a href="http://www.jarva.nu">JKK club</a>, Swedish registry{" "}
          <a href="https://www.sverak.se">SVERAK</a> and internationally in{" "}
          <a href="http://fifeweb.org">FIFE</a>.
        </p>
        <p>
          We got Vivien, our first cat in 2011. She immediately stole our hearts
          with her quirky look, playful personality, and gentle sunny
          disposition. The family grew and 4 years later we found ourselves with
          3 more cats, professionally running a cattery.
        </p>
        <p>
          We love and adore every naked tail in our care. Don Sphynx cats are
          recognised as the friendliest and most affectionate of all cat breeds,
          and our goal as breeders is to pass on these lovely personality
          traits.
        </p>
        <p>
          All our cats are healthy and purebred, with distinguishable looks
          according to the original (old style) Don Sphynx body type.
        </p>
        <p>
          All our cats have ID-chip, breed certificate and up to date
          vaccinations.We are preparing to take part in Swedish and European cat
          shows soon.
        </p>
        <p>
          We are sometimes able to offer kittens for sale; prices will vary
          based on the intent of purchase (show class, breed class or pet
          class). This website contains all information about kitten
          availability. We can arrange for worldwide delivery.
        </p>
        <p>
          Our male cats are not available for mating for the needs of other
          catteries and we limit sales of kittens to other catteries.
        </p>
      </main>
      <Footer />
    </div>
  );
}
