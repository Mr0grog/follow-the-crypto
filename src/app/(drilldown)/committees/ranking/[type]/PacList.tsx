import {
  fetchPACsByReceipts,
  fetchSuperPACsByReceipts,
} from "@/app/actions/fetch";
import PACsByReceiptsTableContents from "@/app/components/PACsByReceiptsTableContents";
import styles from "@/app/components/tables.module.css";
import Link from "next/link";

export default async function PacList({ type }: { type: string }) {
  let data;
  if (type === "all") {
    data = await fetchPACsByReceipts();
  } else if (type === "super") {
    data = await fetchSuperPACsByReceipts();
  } else {
    return (
      <tr className={styles.superPacErrorRow}>
        <td colSpan={6}>
          <span className="secondary">{`"${type}" is not a supported type of PAC. `}</span>
          <Link href="/committees/ranking">Go back</Link>
        </td>
      </tr>
    );
  }

  // Errors handled in child component
  return (
    <PACsByReceiptsTableContents type={type} data={data} fullPage={true} />
  );
}
