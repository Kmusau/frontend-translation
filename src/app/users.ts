export interface Users {
  user_id: number;
  date_created: Date;
  date_modified: Date;
  username: string;
  password: string;
  email: string;
  phone_no: string;
  roles: string;
  active: boolean;
}
