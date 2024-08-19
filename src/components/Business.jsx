import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] bg-blue-gradient ${index !== features.length - 1 ? "mb-6" : "mb-0"}  cursor-pointer`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-500`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-green-500 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-500 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Markazimiz bilan <br className="sm:block hidden" /> katta natijaga
        erishing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      O'quv markazimizda siz faqat nazariy bilimlar emas, balki amaliy ko'nikmalarni ham o'zlashtirasiz. Harakat qilish va o'rganishga tayyor bo'ling 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
