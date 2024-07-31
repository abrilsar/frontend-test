export interface MenuItemProps {
  name: string;
  href: string;
  custom: boolean;
}

export interface TitlesProps {
  title: string;
  text: string;
  subtitle?: string;
  customFirst?: boolean;
}

export interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
  customClass?: React.ReactNode;
}

export interface CustomButtonProps {
  title: string;
  custom: boolean;
  size?: string;
}

export interface AppButtonProps {
  name: string;
  logoUrl: string;
  subtitle: string;
}

export interface QuestionFieldProps {
  title: string;
  description: string;
}

export interface StartsProps {
  classNameCustom: string;
  number: number;
}

export interface ProgressChartProps {
  radio: number[];
  width: number;
}
