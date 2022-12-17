import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacienteDTO } from "./paciente.model";

export default function ComponenteListaPaciente() {
    
    /*//conectando con el servicio web
    const urlpaciente="https://localhost:44372/api-dentysalud/paciente";
    const[paciente,setPaciente]=useState<PacienteDTO[]>();
    useEffect(
        () => {
            axios.get(urlpaciente)
                .then((respuesta: AxiosResponse<PacienteDTO[]>) => {
                    console.log(respuesta.data);
                    setPaciente(respuesta.data);
                });
        }, []
    );
    */
    //Crea,ps ima variable para la direccion
    
    const url = "https://localhost:44372/api-dentysalud/paciente";
    const [pacientes, setPacientes] = useState<PacienteDTO[]>();
    const peticionesGet = async () => {
        await axios
        .get(url)
        .then((response) => {
            setPacientes(response.data);
        })
        .catch((error) => { console.log(error) });
    };

    //LLAMAMOS LA PETICION DENTRO DEL USEEFECT
        useEffect(() => {
        peticionesGet();
    },[]);

    return (
        <div>
            <h1>Lista de Pacientes</h1>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Mantenimineto</th>

                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {pacientes?.map((Paciente) => (
                            <tr key={Paciente.idpaciente}>
                                <th scope="row">{Paciente.idpaciente}</th>
                                <td>{Paciente.nombrepaciente}</td>
                                <td>{Paciente.apellidopaciente}</td>
                                <td>{Paciente.dni}</td>
                                <td>{Paciente.telefonopaciente}</td>
                                <td>{Paciente.correo}</td>
                                <td>
                                <Link to={`/pacientes/actualizar/${Paciente.idpaciente}`} className="btn btn-success">Editar</Link>
                                    <a href="#" className="btn btn-danger">Eliminar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <a href="pacientes/registrar" className="btn btn-primary"> Add Paciente </a>
        </div>
    );
}