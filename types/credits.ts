export interface ICast {
  id: string;
  name: string;
  profile_path: string;
  character: string;
}

export interface ICredits {
  cast: ICast[];
}
