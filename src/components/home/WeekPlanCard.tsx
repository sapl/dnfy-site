import { useLocale, useTranslations } from "next-intl";
import { Avatar } from "@/components/ui/Avatar";
import { BagIcon, ChefHatIcon, TickIcon } from "@/components/ui/Icons";
import { planDate, planRange, slotNote, weekPlan, type PlanSlot } from "@/content/weekPlan";
import { contentLocale } from "@/i18n/routing";
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
  const t = useTranslations("WeekPlan");
  return (
    <div className={styles.slot} title={slot.hint && t(`dishes.${slot.hint}`)}>
      <SlotThumb slot={slot} />
      <div className={styles.text}>
        <div className={styles.meal}>{t(slot.meal)}</div>
        <div className={styles.name}>{t(`dishes.${slot.dish}`)}</div>
        <div className={`${styles.note} ${slot.noteTone && slot.noteTone !== "muted" ? styles[slot.noteTone] : ""}`}>
          {slotNote(slot, t)}
        </div>
      </div>
      {slot.cook && <Avatar person={slot.cook} size={22} />}
    </div>
  );
}

export function WeekPlanCard() {
  const t = useTranslations("WeekPlan");
  const lang = contentLocale(useLocale());

  return (
    <div className={styles.card} role="img" aria-label={t("ariaLabel")}>
      <div className={styles.head}>
        <div>
          <div className={styles.label}>{t("label", { range: planRange(lang) })}</div>
          <div className={`hdl ${styles.title}`}>{t("title")}</div>
        </div>
        <div className={styles.chips}>
          <span className={styles.chipReady}>{t("ready", { count: weekPlan.ready })}</span>
          {weekPlan.assignments.map((a) => (
            <span key={a.person} className={styles.chipPerson}>
              <Avatar person={a.person} size={26} />
              {a.count}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.days}>
        {weekPlan.days.map((d) => {
          const { weekday, day } = planDate(d.date, lang);
          return (
            <div key={d.date} className={styles.row}>
              {d.today ? (
                <div className={styles.today}>
                  {weekday}
                  <br />
                  {day}
                </div>
              ) : (
                <div className={styles.date}>
                  {weekday}
                  <br />
                  <span>{day}</span>
                </div>
              )}
              <Slot slot={d.slots[0]} />
              <Slot slot={d.slots[1]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
