import { Suspense } from "react";
import InfluencedRaces from "./components/InfluencedRaces";
import { MoneyCardSkeleton } from "./components/MoneyCard";
import SuperPACsByReceipts from "./components/PACsByReceipts";
import SuperPACsByReceiptsTableContents from "./components/SuperPACsByReceiptsTableContents";
import AllExpendituresByCommittee from "./components/home/AllExpendituresByCommittee";
import AllExpendituresByParty from "./components/home/AllExpendituresByParty";
import AllRecentExpenditures from "./components/home/AllRecentExpenditures";
import MapWrapper from "./components/home/MapWrapper";
import TotalExpenditures from "./components/home/TotalExpenditures";
import TotalRaised from "./components/home/TotalRaised";
import USMapSkeleton from "./components/skeletons/USMapSkeleton";
import styles from "./page.module.css";
import sharedStyles from "./shared.module.css";

export default function Home() {
  return (
    <main className={sharedStyles.mainLayout}>
      <div className={styles.titleWrapper}>
        <span className={styles.logoArrow} aria-hidden={true}>
          &darr;
        </span>
        <div className={styles.title}>
          <h1 className={styles.titleH1}>Follow the crypto</h1>
        </div>
        <span className={styles.logoArrow} aria-hidden={true}>
          &darr;
        </span>
      </div>
      <div className={styles.totalsRow}>
        <Suspense
          fallback={<MoneyCardSkeleton className={styles.raisedCard} />}
        >
          <TotalRaised className={styles.raisedCard} />
        </Suspense>
        <Suspense fallback={<MoneyCardSkeleton className={styles.spentCard} />}>
          <TotalExpenditures className={styles.spentCard} />
        </Suspense>
      </div>
      <div className={styles.mainCards}>
        <AllExpendituresByParty />
        <AllExpendituresByCommittee />
        <InfluencedRaces />
        <SuperPACsByReceipts type="super">
          <SuperPACsByReceiptsTableContents />
        </SuperPACsByReceipts>
        <AllRecentExpenditures />
      </div>
      <div className={styles.mapContainer}>
        <Suspense fallback={<USMapSkeleton />}>
          <MapWrapper />
        </Suspense>
      </div>
    </main>
  );
}
