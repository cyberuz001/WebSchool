import { compitation } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Markazimda bo'lib <br className="sm:block hidden" />o'tadigan Musobaqalar
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Bizning markazda har oy turli intellektual va bilimdonlik musobaqalari o'tkazilib, eng iqtidorli talabalar rag'batlantiriladi.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={compitation} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
