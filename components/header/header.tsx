import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.menuArea}>
        <Link href="/" className={styles.menu}>
          Booking
        </Link>
        <Link href="/results" className={styles.menu}>
          My Bookings
        </Link>
        <Link href="/contact" className={styles.menu}>
          Contacto
        </Link>
      </div>
    </header>
  );
};
