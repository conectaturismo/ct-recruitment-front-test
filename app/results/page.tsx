import Image from "next/image";
import type { Metadata } from "next";
import { ResultBox } from "@/components";
import styles from "./results.module.css";

export const metadata: Metadata = {
  title: "Results Page",
  description: "Recruitment Test",
};

export default async function Results() {
  const destinations = {
    origin: "Tatooine",
    destiny: "Alderaan",
  };
  const combinations = [
    { going: "Luke Skywalker", returns: ["C-3PO", "Shmi Skywalker"] },
    { going: "Owen Lars", returns: ["Aleen Minor"] },
    { going: "C-3PO", returns: ["Darth Vader", "R5-D4", "C-3PO"] },
    { going: "R5-D4", returns: ["Anakin Skywalker", "Biggs Darklighter"] },
  ];

  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/ct-logo.jpg"
        width={258}
        height={64}
        alt="Logo"
        priority={true}
      />

      <div className={styles.finderArea}>
        <h2 className={styles.title}>Bookings Combinations</h2>
        <div className={styles.resultsArea}>
          {combinations.map((combination) => (
            <ResultBox
              key={null}
              destinations={destinations}
              passengers={combination}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
