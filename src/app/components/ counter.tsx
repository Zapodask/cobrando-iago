"use client";
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    differenceInSeconds,
    differenceInWeeks,
    differenceInYears,
} from "date-fns";
import { useEffect, useState } from "react";
import styles from "../page.module.css";


interface CounterProps {
    initialTime: number;
}

function Counter({ initialTime }: CounterProps) {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (time === 0) {
            setTime(Date.now() - initialTime);
        }

        const interval = setInterval(() => {
            setTime(Date.now() - initialTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [initialTime]);

    const currentTime = new Date();
    const startTime = new Date(initialTime);

    const years = differenceInYears(currentTime, startTime);
    const months = differenceInMonths(currentTime, startTime) % 12;
    const weeks = differenceInWeeks(currentTime, startTime);
    const days = differenceInDays(currentTime, startTime) % 7;
    const hours = differenceInHours(currentTime, startTime) % 24;
    const minutes = differenceInMinutes(currentTime, startTime) % 60;
    const seconds = differenceInSeconds(currentTime, startTime) % 60;

    return (
        <p className={styles.time}>
            {years > 0 && `${years} ${years === 1 ? "ano" : "anos"} `}
            {months > 0 && `${months} ${months === 1 ? "mês" : "meses"} `}
            {weeks > 0 && `${weeks} ${weeks === 1 ? "semana" : "semanas"} `}
            {days > 0 && `${days} ${days === 1 ? "dia" : "dias"} `}
            {hours > 0 && `${hours} ${hours === 1 ? "hora" : "horas"} `}
            {minutes > 0 && `${minutes} ${minutes === 1 ? "minuto" : "minutos"} `}
            {seconds > 0 && `${seconds} ${seconds === 1 ? "segundo" : "segundos"} `}
        </p>
    );
}

export default Counter;
