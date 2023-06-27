import { lazy } from "react";
import './Profile.scss';
import { Lang } from "../../interfaces/Languages";

const ProfileEn	= lazy(() => import('./ProfileEn'));
const ProfileEs	= lazy(() => import('./ProfileEs'));

interface Props {	
	lang: Lang;
}

function Profile({ lang }: Props) {
  return (lang === 'en') ? <ProfileEn /> : <ProfileEs />;
}

export { Profile };