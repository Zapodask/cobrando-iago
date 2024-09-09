
import Counter from "./components/ counter";
import styles from "./page.module.css";

export default function Home() {
  const peoples_waiting: { name: string, initial_time: number }[] = [{
    name: "João",
    initial_time: new Date("2024-08-11T12:00:00.000-03:00").getTime()
  }, {
    name: "Pedro",
    initial_time: new Date("2024-09-06T12:00:00.000-03:00").getTime()
  }]


  return (
    <div className={styles.body}>
      <main className={styles.box}>
        {peoples_waiting.map(({ name, initial_time }) => (
          <div key={name} className={styles.peoples_waiting_box}>
            <h1 className={styles.title} key={name}>
              {name} aguardando recomendação do Iago a
            </h1>

            <Counter initialTime={initial_time} />
          </div>
        ))}
      </main>
      <footer className={styles.footer}>E o Vitinho tem uma</footer>
    </div>
  );
}
