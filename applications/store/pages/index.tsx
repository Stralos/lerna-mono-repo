import { greetWithTime } from "@walnut/time";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {greetWithTime(new Date(), { name: "James", lastName: "Smith" })}
    </div>
  );
}
