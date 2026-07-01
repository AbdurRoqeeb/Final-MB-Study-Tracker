export enum StudyStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

export enum SubjectType {
  MEDICINE = "Medicine",
  SURGERY = "Surgery",
  COMMUNITY_MEDICINE = "Community Medicine"
}

export enum StudyPriority {
  HIGH = "HIGH",
  ADVANCE_PREP = "ADVANCE PREP",
  UPCOMING = "UPCOMING"
}

export interface Topic {
  id: string;
  subject: SubjectType;
  batch: string; // M1, M2, M3, S1, S2, S3, CM1, CM2
  topicName: string;
  lecturer: string;
  subspecialty: string;
  priority: StudyPriority;
  batchPriority: number; // Higher number means higher precedence/recency
  highYield: boolean;
  status: StudyStatus;
  completedAt?: string; // YYYY-MM-DD completion date
}

export interface StudyMetrics {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  progressPercent: number;
}

export interface DailyPlanSplit {
  communityPercent: number;
  medicinePercent: number;
  surgeryPercent: number;
  title: string;
  description: string;
}
