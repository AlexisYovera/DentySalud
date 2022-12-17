import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CitaDTO } from "./cita.model";

export default function ComponenteListaCita() {
    const url = "https://localhost:44372/api-dentysalud/cita";
    const [citas, setCitas] = useState<CitaDTO[]>();
    const peticionesGet = async () => {
        await axios
        .get(url)
        .then((response) => {
            setCitas(response.data);
        })
        .catch((error) => { console.log(error) });
    };

    //LLAMAMOS LA PETICION DENTRO DEL USEEFECT
        useEffect(() => {
        peticionesGet();
    },[]);

    return (
        <div>
            <h1>Lista de Citas</h1>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre Paciente</th>
                            <th scope="col">Apellido Paciente</th>
                            <th scope="col">Local</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Mantenimineto</th>

                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {citas?.map((Cita) => (
                        <tr key={Cita.idcita}>
                            <th scope="row">{Cita.idcita}</th>
                            <td>{Cita.nombrepaciente}</td>
                            <td>{Cita.apellidopaciente}</td>
                            <td>{Cita.local}</td>
                            <td>{Cita.hora}</td>
                            <td>{Cita.fecha}</td>
                            <td>
                                <Link to={`/citas/actualizar/${Cita.idcita}`} className="btn btn-success">Editar</Link>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                        ))}                       
                    </tbody>    
                </table>
            </div>

            <a href="citas/registrar" className="btn btn-primary"> Add Cita </a>
        </div>
    );
}