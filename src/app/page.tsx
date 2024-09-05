"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [time, setTime] = useState<number>(0);

  const initial_time = new Date("2024-08-11T12:00:00.000-03:00").getTime();

  useEffect(() => {
    if (time === 0) {
      setTime(Date.now() - initial_time);
    }

    const interval = setInterval(() => {
      setTime((prev) => prev + 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [initial_time, time]);

  const weeks = Math.floor(time / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor(
    (time % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  console.log("a");

  return (
    <div className={styles.body}>
      <main className={styles.box}>
        <h1 className={styles.title}>Aguardando recomendação do Iago a</h1>
        <p className={styles.time}>
          {weeks} semanas, {days} dias, {hours} horas, {minutes} minutos,{" "}
          {seconds} segundos
        </p>
      </main>
      <footer className={styles.footer}>E o Vitinho tem uma</footer>
    </div>
  );
}
