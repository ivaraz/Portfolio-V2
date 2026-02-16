// ─── Skill Types ─────────────────────────────────────────────
export type SkillItem = {
  id: number;
  logos: string;
  title: string;
  animate: string;
  duration: number;
};

// ─── Project Types ───────────────────────────────────────────
export type ProjectItem = {
  photo: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  animate?: string;
};

// ─── Certificate Types ───────────────────────────────────────
export type CertificateItem = {
  image: string;
  title?: string;
  description?: string;
};

// ─── Education Types ─────────────────────────────────────────
export type EducationItem = {
  logo: string;
  school: string;
  major: string;
  year: string;
  status: "current" | "graduated";
  description?: string;
  gpa?: string;
};

// ─── Social/Details Types ────────────────────────────────────
export type SocialItem = {
  logo: JSX.Element;
  sosmed: string;
  link: string;
  isDownload?: boolean;
};
