export interface Languages<T> {
	en: T;
	es: T;
}

export type Lang = keyof Languages<any>