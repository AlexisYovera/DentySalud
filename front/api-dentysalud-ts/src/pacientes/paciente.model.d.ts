
export interface PacienteDTO{
    idpaciente: interger;
    nombrepaciente:string;
    apellidopaciente:string;
    dni:integer;
    telefonopaciente:integer;
    correo:string;
}

export interface PacienteRegistrarDTO{
    nombrepaciente:string;
    apellidopaciente:string;
    dni:integer;
    telefonopaciente:integer;
    correo:string;
}