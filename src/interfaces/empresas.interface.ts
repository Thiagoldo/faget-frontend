export interface IEmpresas {
  id_empresa: number;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  entidade_sindical?: string;
  data_base_cct?: Date;
}

export interface ICreateUpdateEmpresa extends Partial<IEmpresas> {
}

export interface IEmpresasResponse {
  content: IEmpresas[];
  count: number;
}