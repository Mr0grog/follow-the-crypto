import { CandidateSummary } from "./Elections";
import { ScheduleE } from "./FECTypes";

enum CandidateOffice {
  President = "P",
  Senate = "S",
  House = "H",
}

export type Expenditure = { committee_id: number } & Pick<
  ScheduleE,
  | "expenditure_amount"
  | "candidate_office_state"
  | "expenditure_date"
  | "expenditure_description"
  | "candidate_id"
  | "candidate_first_name"
  | "candidate_last_name"
  | "candidate_middle_name"
  | "candidate_suffix"
  | "candidate_name"
  | "candidate_office"
  | "candidate_office_state"
  | "candidate_office_district"
  | "candidate_party"
  | "category_code"
  | "category_code_full"
  | "dissemination_date"
  | "election_type"
  | "payee_name"
  | "support_oppose_indicator"
  | "transaction_id"
>;

interface ExpenditureGroup {
  expenditures: Expenditure[];
  total: number;
}

interface RaceDetails {
  candidate_office: CandidateOffice;
  candidate_office_district: string;
}

export interface RaceExpenditureGroup extends ExpenditureGroup {
  details: RaceDetails;
  expenditures: Expenditure[];
}

export interface Expenditures {
  by_committee: Record<string, ExpenditureGroup>;
  by_race: Record<string, RaceExpenditureGroup>;
  total: number;
}

export interface RecentCommitteeExpenditures {
  recent: Expenditure[];
}

export type ExpenditureCandidateSummary = {
  state: string;
  race: string;
} & CandidateSummary;

export interface ExpendituresByCandidate {
  order: string[];
  candidates: Record<string, ExpenditureCandidateSummary>;
}
