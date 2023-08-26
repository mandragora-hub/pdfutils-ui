import styles from "../styles/Home.module.css";

export const metadata = {
  title: "Metadata - Extractor",
};

export default function Page() {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Metadata - Extractor</h2>

      <p className={styles["welcome-text"]}>
        Welcome, dear stranger{" "}
        <span role="img" alt="hello">
          👋
        </span>
      </p>
      <p className={styles["info-text"]}>
        I&apos;m using this awesome product because I need to deploy a utils function
        that for <code>litterarum</code> that able me to extract metadata for
        pdf/epub files.
      </p>
    </div>
  );
}
