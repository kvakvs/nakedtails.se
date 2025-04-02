import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import Image from "next/image";
import lana from "./images/naked-lana.webp";
import bolero from "./images/naked-undressing-bolero.jpg";
import nakedUndressing2 from "./images/naked-undressing-2.jpg";
import galaxy from "./images/subtle-flock-galaxy.jpg";
import vivien from "./images/flock-vivien.webp";
import anton from "./images/velours-down-anton.jpg";
import kiona from "./images/brush-kiona.jpg";

export default function DonSphynxSkinTypes() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Variations in types of fur Don Sphynx</h1>
        <p>
          Note: The fur and hair that cover the body of a Don Sphynx is very
          unstable and may change with time. It depends on the time of year and
          on the hormonal status of the animal.
        </p>
        <h2>Naked</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            <strong>“Proper naked“.</strong> These animals are like rubber to
            the touch, sticky. They have no whiskers. Extremely rare. Never,
            under any circumstances, do they have any hair e.g. Lana.
          </div>

          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={lana} alt="Lana" className="w-full" />
          </div>
        </div>
        <h2>Naked “undressing”.</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            These cats are like the rubber to the touch, feel sticky. Unlike the
            “proper naked” may have whiskers e.g. Bolero, Alex, Axel, Aston
          </div>
          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={bolero} alt="Bolero" className="w-full" />
            <Image
              src={nakedUndressing2}
              alt="A litter of still fuzzy kittens"
              className="w-full"
            />
          </div>
        </div>
        <h2>Subtle flock.</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            Evenly spaced microhairs up to 0.1 cm cover the the body. The animal
            gives the impression of naked, but feels like micro wool to the
            touch e.g. Galaxy, Lena
          </div>
          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={galaxy} alt="Galaxy" className="w-full" />
          </div>
        </div>
        <h2>Flock.</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            Light flock. Small thin micro-hairs to 0.2 cm. cover the body.
            Longer hairs on the feet, may have whiskers e.g. Vivien
          </div>
          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={vivien} alt="Vivien" className="w-full" />
          </div>
        </div>
        <h2>Velours-point</h2>
        <p>
          The body is like light velour or flock to the touch. Paws and muzzle
          may be covered with thick, short, soft fur up to 0.4 cm.
        </p>
        <h2>Velours down</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            The body is covered with soft fur up to 0.4 mm. Long soft, twisted
            hair on the chest, behind the ears, legs, hips, tail. Note: One of
            the more “changing” variations (see note on Don Sphynx fur). e.g.
            Anton
          </div>
          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={anton} alt="Anton" className="w-full" />
          </div>
        </div>
        <h2>Brush</h2>
        <div className="flex w-full">
          <div className="flex-2 p-2 border-gray-400 border-t">
            Brush–velours. The body is covered with short, thick, rare, hard
            hair up to 0.5 cm. Spots with no hair may be found on the back,
            sides, neck. e.g. Kiona
          </div>
          <div className="flex-2 p-2 border-gray-400 border-t">
            <Image unoptimized src={kiona} alt="Kiona" className="w-full" />
          </div>
        </div>
        <h2>Brush-point</h2>
        <p>
          The body is like light velour or flock. Paws, muzzle, tail are covered
          with dense thick crimped short (as in Rex) or straight bristly hair.
        </p>
        <h2>Brush thick</h2>
        <p>
          All over the body there is a thick bristly coat (the skin is
          practically not visible). Chest, legs, hips, tail may be covered with
          long hard thick fur. “Bushy tail.”
        </p>
      </main>
      <Footer />
    </div>
  );
}
