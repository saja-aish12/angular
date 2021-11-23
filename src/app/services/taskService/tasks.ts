export interface ITasks {
  list_id: number;
  id: number;
  name: string;
  description: string;
  creating_date: Date;
  last_update: Date;
  start_date: Date;
  end_date: Date;
  current_state: string;
}
