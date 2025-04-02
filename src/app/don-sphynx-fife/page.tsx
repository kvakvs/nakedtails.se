import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TableRowFife } from "./table-row-fife";
import styles from "../page.module.css";

export default function DonSphynxFife() {
  return (
    <div className={styles.pageContainerDiv}>
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1>FIFE Race Standard</h1>

        <div className="flex flex-col w-full border border-gray-200 rounded-lg">
          <TableRowFife
            col1="General"
            col2="Appearance"
            col3="The Don Sphynx is a solid cat, soft and warm to the touch. The specific feature of this breed is hairlessness."
          />
          <TableRowFife
            col1=""
            col2="Size"
            col3="Medium. Males are significantly larger than females."
          />
          <TableRowFife
            col1="Head"
            col2="Shape"
            col3="Wedge shaped, slightly longer than broad, with prominent eye brows."
          />
          <TableRowFife col1="" col2="Forehead" col3="Flat" />
          <TableRowFife col1="" col2="Cheeks" col3="Prominent cheekbones" />
          <TableRowFife
            col1=""
            col2="Nose"
            col3="Medium long and straight, with a definite curve to the forehead."
          />
          <TableRowFife
            col1=""
            col2="Muzzle"
            col3="Well defined, of medium length, slightly rounded, with a slight whisker break-pinch."
          />
          <TableRowFife
            col1=""
            col2="Jaws, chin"
            col3="Well-developed jaws, strong chin."
          />
          <TableRowFife
            col1=""
            col2="Whiskers"
            col3="Curly, thick, of any length, maybe broken off."
          />
          <TableRowFife
            col1="Ears"
            col2="Shape"
            col3="Large, ring to rounded tips. The inside is totally hairless"
          />
          <TableRowFife
            col1=""
            col2="Placement"
            col3="Set high on the head, slightly tilted forward, held alert. Outer edges of the ears continue the lines of the head. The distance between the ears to be no more than one ear width."
          />
          <TableRowFife
            col1="Eyes"
            col2="Shape"
            col3="Almond-shaped, slightly slanting upwards, medium in size and open, alert expression."
          />
          <TableRowFife
            col1=""
            col2="Colour"
            col3="Bright, pure and clear; corresponding to the skin or coat colour."
          />
          <TableRowFife
            col1="Neck"
            col2=""
            col3="Of medium length, very strong and muscled, rounded in shape. Powerful, especially in males."
          />
          <TableRowFife
            col1="Body"
            col2="Structure"
            col3="Medium long, medium strong and muscular. Broad rounded chest, strong, solid shoulders and back, broad hips."
          />
          <TableRowFife
            col1="Legs"
            col2=""
            col3="Medium long, medium strong in proportion to the body, hind legs longer than front legs."
          />
          <TableRowFife
            col1=""
            col2="Paws"
            col3="Oval with long, prominent toes — 'monkey fingers'."
          />
          <TableRowFife
            col1="Tail"
            col2=""
            col3="Slender, broader at base and tapering to the tip. Length in proportion to body. The tip of the tail may be covered with soft, dense, close lying, slightly curlu coat."
          />
          <TableRowFife
            col1="Coat and skin types"
            col2="Skin and wrinkles"
            col3="Elastic, well wrinkled on the head, neck, legs and on the belly. Wrinkles desirable especially around the muzzle, between the ears and around the shoulders, although wrinkling should not be so pronounced that it affects the cat's normal functions. Short harsh hair on the muzzle, ears and legs may occur. The tail may be covered with single hairs. In young cats the muzzle may be covered with short thin fur. Complete hairlessness is preferred"
          />
          <TableRowFife col1="" col2="Hairless" col3="Appears hairless." />
          <TableRowFife
            col1=""
            col2="Flock"
            col3="Residual flock hair with no more than 2 mm length on the whole body."
          />
          <TableRowFife
            col1=""
            col2="Brush"
            col3="Fine wavy, often wire hair on the whole body, with bold areas on the head, upper part of neck or on the back of more than 2 mm in length."
          />
          <TableRowFife
            col1=""
            col2="Skin colours"
            col3="All colour varieties and patterns are permitted, including those with white. Any amount of white is permitted. For colour varieties refer to the tables below (on the original page)."
          />
        </div>

        <a href="https://fifeweb.org/app/uploads/2023/10/DSP.pdf">
          Breed standards
        </a>
      </main>
      <Footer />
    </div>
  );
}
