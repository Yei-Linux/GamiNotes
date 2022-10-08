export interface ITopic {
  _id?: string;
  title?: string;
  description?: string;
  user_id?: string;
  notes?: number;
  notes_memorized?: number;
  is_liked?: boolean;
  is_ignored?: boolean;
}
