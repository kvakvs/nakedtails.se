import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "../page.module.css";
import { TableHeadSkinTypes } from "./table-head-skintypes";
import { TableRowSkinTypes } from "./table-row-skintypes";

export default function DonSphynxDifferences() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>Differences Between Naked Races</h1>

        <TableHeadSkinTypes />
        <TableRowSkinTypes
          col1="Origin of the breed"
          donsphynx="Natural mutation"
          canadian="Natural mutation"
          peterbold="Natural mutation"
          levkoy="Natural mutation"
          elf="Natural mutation"
          bambino="Natural mutation"
        />
        <TableRowSkinTypes
          col1="Country and year of origin"
          donsphynx="1986 USSR (now Russia)"
          canadian="1966 Canada"
          peterbold="1994 Russia"
          levkoy="2004 Ukraine"
          elf="2006 USA"
          bambino="2000 USA"
        />
        <TableRowSkinTypes
          col1="FIFE Classification Code"
          donsphynx="DSP"
          canadian="SPH"
          peterbold="PEB"
          levkoy="not recognized"
          elf="not recognized"
          bambino="not recognized"
        />
        <TableRowSkinTypes
          col1="General view"
          donsphynx="Medium, with strong muscles."
          canadian="Medium, dense body, surprising weight for its size."
          peterbold="Medium"
          levkoy="Medium"
          elf="Medium"
          bambino="Medium"
        />
        <TableRowSkinTypes
          col1="Head"
          donsphynx="Wedge shaped, slightly longer than broad, with prominent eye brows."
          canadian="Modified wedge with rounded contours, slightly longer than wide."
          peterbold="Medium size, proportional to the body, well balanced."
          levkoy="The head is angular, flat and long."
          elf="Modified wedge with rounded contours, slightly longer than wide."
          bambino="Modified wedge with rounded contours, slightly longer than wide."
        />
        <TableRowSkinTypes
          col1="Ears"
          donsphynx="Large, tapering to rounded tips. The inside is totally hairless."
          canadian="Large, broad at base and open, slightly rounded tips."
          peterbold="Large and pointed, wide at the base. Ears continue the lines of the wedge"
          levkoy="The ears are wide set, roundly bent at the folds, the rest is straight."
          elf="Cats  have ears that start out normal, but gradually curl backwards."
          bambino="Slight amount of hair allowed on lower outer side edges and on the back of the ear."
        />
        <TableRowSkinTypes
          col1="Eyes"
          donsphynx="Almond-shaped, slightly slanting upwards, medium in size and open."
          canadian="Lemon shaped, large, slanting to outer edge of ear. Slightly more than an eye's width between eyes."
          peterbold="Medium in size, neither protruding nor recessed. Almond in shape and set slightly slanted towards the nose to be in harmony."
          levkoy="The eyes are large, almond-shaped. Eye color can be anything, but preference is given to cats having blue or green eyes."
          elf="Lemon shaped, large, slanting to outer edge of ear. Slightly more than an eye's width between eyes."
          bambino="Lemon shaped, large, slanting to outer edge of ear. Slightly more than an eye's width between eyes."
        />
        <TableRowSkinTypes
          col1="Body"
          donsphynx="Medium long, medium strong and muscular."
          canadian="Medium long, hard and muscular, not delicate. Full rounded abdomen, but not fat."
          peterbold="Long and slender, well muscled but still dainty and elegant. The shoulders are not wider than the hips"
          levkoy="The body has well-developed muscles. The chest is short and narrow."
          elf="Medium long, hard and muscular, not delicate. Full rounded abdomen."
          bambino="Medium long, hard and muscular, not delicate. Full rounded abdomen."
        />
        <TableRowSkinTypes
          col1="Legs"
          donsphynx="Medium long, medium strong in proportion to the body, hind legs longer than front legs"
          canadian="Length in proportion with body, medium long. Hind legs slightly longer than the front ones. Front legs widely set. Medium boning, firm and muscular"
          peterbold="Long and fine,  proportional to the body"
          levkoy="The legs are long and slender. Paws are oval, with graceful fingers."
          elf="Length in proportion with body, medium long. Hind legs slightly longer than front legs. Front legs widely set. Medium boning, firm and muscular"
          bambino="Front: the same thickness throughout its length. Rear: thigh and calf of about the same length. Hind legs slightly longer and wider than front legs. Length: Short."
        />
        <TableRowSkinTypes
          col1="Tail"
          donsphynx="Slender, broader at base and tapering to the tip. Length is proportional to the body."
          canadian="Medium length, thin, tapering from body to the tip."
          peterbold="Very long; thin, also at the base; tapers to a fine point."
          levkoy="Medium length, straight, strong and flexible."
          elf="Medium length, thin, tapering from body to the tip."
          bambino="Medium length, thin, tapering from body to the tip."
        />
        <TableRowSkinTypes
          col1="Skin types"
          donsphynx="Naked, Flock, Brush"
          canadian="Naked, residual hair on the face"
          peterbold="Naked, Flock, Brush"
          levkoy="Naked, Flock, Brush"
          elf="Naked, residual hair on the face"
          bambino="Naked, residual hair on the face"
        />
      </main>
      <Footer />
    </div>
  );
}
