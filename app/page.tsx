import Image from "next/image";
import type { Metadata } from "next";
import { setClient } from "@/client";
import { Input } from "@/components";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Conecta Turismo",
  description: "Recruitment Test",
};

export default async function Home() {
  const client = setClient("graphql"); // Set the client type to request data

  const example = [
    { id: "cGxhbmV0czozNA==", name: "Toydaria - swamps, lakes" },
    { id: "cGxhbmV0czozOA==", name: "Aleen Minor - unknown" },
    { id: "cGxhbmV0czozOQ==", name: "Vulpter - urban, barren" },
    { id: "cGxhbmV0czo0Ng==", name: "Tholoth - unknown" },
    { id: "cGxhbmV0czo0Nw==", name: "Iktotch - rocky" },
    { id: "cGxhbmV0czo0OA==", name: "Quermia - unknown" },
    { id: "cGxhbmV0czo0OQ==", name: "Dorin - unknown" },
    { id: "cGxhbmV0czo1NA==", name: "Zolan - unknown" },
    { id: "cGxhbmV0czo1NQ==", name: "Ojom - oceans, glaciers" },
    { id: "cGxhbmV0czo1Ng==", name: "Skako - urban, vines" },
    { id: "cGxhbmV0czo2MA==", name: "Umbara - unknown" },
    { id: "cGxhbmV0czo2MQ==", name: "Jakku - deserts" },
  ];

  const planets = example;

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
        <h2 className={styles.title}>Resident finder</h2>
        <div className={styles.formArea}>
          <Input placeholder="Planet Origin" planets={planets} />
          <Image src="/svg-path.svg" width={19} height={18} alt="arrow" />
          <Input placeholder="Planet Destiny" planets={planets} />
          <button className={styles.button}>Buscar</button>
        </div>
      </div>
    </main>
  );
}
