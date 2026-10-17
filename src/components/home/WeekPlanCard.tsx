import { Avatar } from "@/components/ui/Avatar";
import { BagIcon, ChefHatIcon, TickIcon } from "@/components/ui/Icons";
import { weekPlan, type PlanSlot } from "@/content/weekPlan";
import styles from "./WeekPlanCard.module.css";

function SlotThumb({ slot }: { slot: PlanSlot }) {
  if (slot.kind === "restaurant") return <div className={styles.thumb}><ChefHatIcon size={18} /></div>;
  if (slot.kind === "delivery") return <div className={styles.thumb}><BagIcon size={16} /></div>;
  if (slot.kind === "ready") return <div className={styles.thumb}><TickIcon size={18} /></div>;
  return (
    <div className={`${styles.thumb} ${styles[slot.swatch ?? "peach"]}`}>
      <i />
    </div>
  );
}

function Slot({ slot }: { slot: PlanSlot }) {
  return (
    <div className={styles.slot} title={slot.hint}>
      <SlotThumb slot={slot} />
      <div className={styles.text}>
        <div className={styles.meal}>{slot.meal}</div>
        <div className={styles.name}>{slot.title}</div>
        <div className={`${styles.note} ${slot.noteTone && slot.noteTone !== "muted" ? styles[slot.noteTone] : ""}`}>
          {slot.note}
        </div>
      </div>
      {slot.cook && <Avatar person={slot.cook} size={22} />}
    </div>
  );
}

export function WeekPlanCard() {
  return (
    <div className={styles.card} role="img" aria-label="Example of a Dinify weekly plan">
      <div className={styles.head}>
        <div>
          <div className={styles.label}>{weekPlan.label}</div>
          <div className={`hdl ${styles.title}`}>Plan</div>
        </div>
        <div className={styles.chips}>
          <span className={styles.chipReady}>{weekPlan.ready} ready</span>
          {weekPlan.assignments.map((a) => (
            <span key={a.person} className={styles.chipPerson}>
              <Avatar person={a.person} size={26} />
              {a.count}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.days}>
        {weekPlan.days.map((d) => (
          <div key={d.day} className={styles.row}>
            {d.today ? (
              <div className={styles.today}>
                {d.weekday}
                <br />
                {d.day}
              </div>
            ) : (
              <div className={styles.date}>
                {d.weekday}
                <br />
                <span>{d.day}</span>
              </div>
            )}
            <Slot slot={d.slots[0]} />
            <Slot slot={d.slots[1]} />
          </div>
        ))}
      </div>
    </div>
  );
}
