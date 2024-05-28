export interface ITerceirizado {
  id_terceirizado: number;
  cpf: string;
  nome: string;
  sexo?: string;
  data_nascimento?: Date;
  rg?: string;
  pis?: string;
  ctps?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
}

export interface ICreateUpdateTerceirizado extends Partial<ITerceirizado> {
}

export interface ITerceirizadosResponse {
  content: ITerceirizado[];
  count: number;
}