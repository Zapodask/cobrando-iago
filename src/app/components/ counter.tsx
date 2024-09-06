import { useEffect, useState } from "react";
import styles from "../page.module.css";


interface CounterProps {
    initialTime: number;
}

function Counter({
    initialTime
}: CounterProps) {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (time === 0) {
            setTime(Date.now() - initialTime);
        }

        const interval = setInterval(() => {
            setTime((prev) => prev + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [initialTime, time]);

    const weeks = Math.floor(time / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
        (time % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);


    return <p className={styles.time}>
        {weeks} semanas, {days} dias, {hours} horas, {minutes} minutos,{" "}
        {seconds} segundos
    </p>
}

export default Counter;