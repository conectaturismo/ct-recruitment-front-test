"use client";
import React, { useState } from "react";

import styles from "./input.module.css";

type Planet = {
  id: string;
  name: string;
};

type Props = {
  placeholder: string;
  planets: Planet[];
};

export const Input = ({ placeholder, planets }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {
        <div className={styles.results}>
          {planets.map((planet) => (
            <span key={null}>{planet.name}</span>
          ))}
        </div>
      }
    </div>
  );
};
