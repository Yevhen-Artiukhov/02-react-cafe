import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.item}>
        Good: <span className={css.value}>{votes.good}</span>
      </p>
      <p className={css.item}>
        Neutral: <span className={css.value}>{votes.neutral}</span>
      </p>
      <p className={css.item}>
        Bad: <span className={css.value}>{votes.bad}</span>
      </p>
      <p className={css.item}>
        Total: <span className={css.value}>{totalVotes}</span>
      </p>
      <p className={css.item}>
        Positive: <span className={css.value}>{positiveRate}%</span>
      </p>
    </div>
  );
}
