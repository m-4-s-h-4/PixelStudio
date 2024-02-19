import styles from "./TextSection.module.css";

const TextSection = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Where every Pixel tells a story</h2>
      </div>
    </div>
  );
};

export default TextSection;
