import Candidate from "@/app/components/Candidate";
import { CandidateSummary, RaceCandidate } from "@/app/types/Elections";
import { formatCurrency } from "@/app/utils/utils";
import styles from "./page.module.css";

export default function CandidateResult({
  candidate,
  candidateSummary,
  supportTotal,
  opposeTotal,
  rowClass,
  isRaceUpcoming,
}: {
  candidate: RaceCandidate;
  candidateSummary: CandidateSummary;
  supportTotal: number;
  opposeTotal: number;
  rowClass?: string;
  isRaceUpcoming: boolean;
}) {
  let candidateNameClassName;
  if (
    ("won" in candidate && candidate.won === false) ||
    ("withdrew" in candidate && candidate.withdrew)
  ) {
    candidateNameClassName = styles.defeatedCandidateName;
  } else if (!isRaceUpcoming) {
    candidateNameClassName = styles.wonCandidateName;
  }
  console.log(supportTotal, opposeTotal);
  return (
    <tr className={rowClass}>
      <td className={styles.candidateCell}>
        <Candidate
          candidate={candidate}
          candidateSummary={candidateSummary}
          candidateClassName={styles.candidate}
          candidateNameClassName={candidateNameClassName}
          writeIn={candidate.writeIn}
          noMargins={true}
        />
      </td>
      <td className="number-cell">
        {supportTotal > 0 && formatCurrency(supportTotal, true)}
      </td>
      <td className="number-cell">
        {opposeTotal > 0 && formatCurrency(opposeTotal, true)}
      </td>
      <td className="secondary">{candidate.withdrew && `Withdrew`}</td>
    </tr>
  );
}
