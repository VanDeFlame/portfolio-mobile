import { Languages } from './Languages';

interface JobInfo {
	description: string;
	responsibilities: string;
	team: string;
	extraInformation?: string;
}

export interface JobData {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
	technologies: string;
	info: Languages<JobInfo>
}

