export interface IDropDownCardNote {
  id: string;
  title: string;
  icon: string;
  url?: string | null;
  action?: null | (() => void);
}
