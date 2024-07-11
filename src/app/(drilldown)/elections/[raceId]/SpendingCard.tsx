import { fetchStateElections } from "@/app/actions/fetch";
import ErrorText from "@/app/components/ErrorText";
import { ElectionsByState } from "@/app/types/Elections";
import { is4xx, isError } from "@/app/utils/errors";
import Spending from "./Spending";

export default async function SpendingCard({ raceId }: { raceId: string }) {
  const raceIdSplit = raceId.split("-");
  const shortRaceId = raceIdSplit.slice(1).join("-");
  const stateAbbr = raceIdSplit[0];

  const electionsData = await fetchStateElections(stateAbbr);

  if (isError(electionsData)) {
    if (is4xx(electionsData)) {
      return (
        <span className="secondary">
          No cryptocurrency PAC spending has been recorded in this state.
        </span>
      );
    }
    return <ErrorText subject="election data" />;
  }

  const elections = electionsData as ElectionsByState;
  if (!(shortRaceId in elections)) {
    return (
      <div className="secondary">
        No cryptocurrency PAC spending has been recorded for this election.
      </div>
    );
  }

  return (
    <Spending election={elections[shortRaceId]} labelId="spending-label" />
  );
}
