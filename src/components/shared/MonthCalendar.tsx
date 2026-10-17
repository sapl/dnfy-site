import { BagOutlineIcon, CheckIcon } from "@/components/ui/Icons";
import { sampleMonth } from "@/content/calendar";
import styles from "./MonthCalendar.module.css";

const labels = { cook: "cooking day", free: "free day", out: "night out" } as const;

export function MonthCalendar() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={`hdl ${styles.title}`}>{sampleMonth.title}</div>
        <div className={styles.legend}>
          <span>
            <i className={styles.legendFree} />
            Free
          </span>
          <span>
            <i className={styles.legendOut} />
            Out
          </span>
        </div>
      </div>

      <div className={styles.weekdays} aria-hidden="true">
        {sampleMonth.weekdays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <ul className={styles.grid} role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {sampleMonth.days.map(({ day, type }) => (
          <li key={day} className={`${styles.cell} ${styles[type]}`} aria-label={`${day} — ${labels[type]}`}>
            <span>{day}</span>
            {type === "cook" && <i />}
            {type === "free" && <CheckIcon size={12} strokeWidth={3} />}
            {type === "out" && <BagOutlineIcon size={12} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
