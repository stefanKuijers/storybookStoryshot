export type Icons =
  | "active"
  | "add"
  | "adjust"
  | "admin"
  | "archive"
  | "archived"
  | "calculator"
  | "calendar"
  | "calendardays"
  | "checkmark"
  | "chevron"
  | "clock"
  | "cloud"
  | "customization"
  | "dashboard"
  | "default"
  | "disable"
  | "discussions"
  | "docx"
  | "done"
  | "downarrow"
  | "download"
  | "enable"
  | "error"
  | "file"
  | "files"
  | "filter"
  | "folder"
  | "group"
  | "help"
  | "html"
  | "info"
  | "invoice"
  | "key"
  | "language"
  | "link"
  | "minus"
  | "more"
  | "move"
  | "notification"
  | "plus"
  | "poweroff"
  | "projects"
  | "quotes"
  | "referral"
  | "restore"
  | "search"
  | "security"
  | "spinner"
  | "trash"
  | "unlink"
  | "uploadfile"
  | "user"
  | "warning"
  | "wrapup"
  | "x"
  | "xml"
  | "zip";

export type Sizes = "fontsize" | "tiny" | "small" | "medium" | "large" | "extralarge" | "huge";
export type Colors = "white" | "yellow" | "blue" | "red" | "gray25" | "black" | "normal" | "faded";
export interface IconProps {
  icon: Icons | string;
  size?: Sizes;
  color?: Colors;
  onClick?: () => void;
  defaultIcon?: string;
  className?: string;
  id?: string;
}
