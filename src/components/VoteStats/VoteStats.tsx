import css from "./VoteStats.module.css";

interface VoteStatsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positive: number; // %
}

export default function VoteStats({
  good,
  neutral,
  bad,
  total,
  positive,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.item}>
        Good: <span className={css.value}>{good}</span>
      </p>
      <p className={css.item}>
        Neutral: <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.item}>
        Bad: <span className={css.value}>{bad}</span>
      </p>
      <p className={css.item}>
        Total: <span className={css.value}>{total}</span>
      </p>
      <p className={css.item}>
        Positive: <span className={css.value}>{positive}%</span>
      </p>
    </div>
  );
}
