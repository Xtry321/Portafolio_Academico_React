import {
  LuAward,
  LuBriefcase,
  LuCode,
  LuGithub,
  LuGraduationCap,
  LuLayers,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuUsers,
} from "react-icons/lu";

const ICON_MAP = {
  graduation: LuGraduationCap,
  award: LuAward,
  briefcase: LuBriefcase,
  code: LuCode,
  layers: LuLayers,
  users: LuUsers,
  location: LuMapPin,
  phone: LuPhone,
  mail: LuMail,
  linkedin: LuLinkedin,
  github: LuGithub,
};

export default function ProfileIcon({ name, size = 20, className = "" }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;

  return (
    <span className={`icon-box ${className}`.trim()} aria-hidden="true">
      <Icon size={size} strokeWidth={1.75} />
    </span>
  );
}
