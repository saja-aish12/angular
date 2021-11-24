export interface ITasks {
  id: number;
  name: string;
  description: string;
  creating_date: Date;
  last_update: Date;
  start_date: Date;
  end_date: Date;
  current_state: string;
  list_id: number;
}
