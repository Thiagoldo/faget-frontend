import axios, { AxiosInstance } from "axios";
import { ICreateUpdateEmpresa, IEmpresas, IEmpresasResponse } from "../interfaces/empresas.interface.ts";

// const baseUrl: string = "http://192.168.137.83:3000";
const baseUrl: string = "https://faget-backend.onrender.com";
const connection: AxiosInstance = axios.create({ baseURL: baseUrl });

export const getEmpresas = async (itemsPerPage: number, page: number, nome?: string): Promise<IEmpresasResponse> => {
  let url = `${baseUrl}/empresas?itemsPerPage=${itemsPerPage}&page=${page}` + (nome ? `&nome=${nome}` : '')
  return connection.get(url).then((response) => response.data);
}

export const getEmpresaById = async (id_terceirizado: number): Promise<IEmpresas> => {
  let url = `${baseUrl}/empresas/${id_terceirizado}`;
  return connection.get(url).then((response) => response.data);
}

export const saveEmpresa = async (terceirizado: ICreateUpdateEmpresa): Promise<IEmpresas> => {
  let url = `${baseUrl}/empresas`;
  return connection.post(url, terceirizado).then((response) => response.data);
}

export const updateEmpresa = async (terceirizado: ICreateUpdateEmpresa): Promise<IEmpresas> => {
  let url = `${baseUrl}/empresas/${terceirizado.id_empresa}`;
  return connection.patch(url, terceirizado).then((response) => response.data);
}

export const deleteEmpresa = async (terceirizado: ICreateUpdateEmpresa): Promise<IEmpresas> => {
  let url = `${baseUrl}/empresas/${terceirizado.id_empresa}`;
  return connection.delete(url).then((response) => response.data);
}