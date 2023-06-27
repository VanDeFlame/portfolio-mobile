import { Languages } from './Languages';

export interface ProjectData {
	id: string;
	title: string;
	short: Languages<string>;
	description: Languages<string>;
	technologies: string;
	repository: string;
	implementation: string;
}