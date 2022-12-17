import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OdontologoDTO } from "./odontologo.model";

export default function ComponenteListaOdontologo(){
    const url = "https://localhost:44372/api-dentysalud/odontologo";
    const [odontologos, setOdontologos] = useState<OdontologoDTO[]>();
    const peticionesGet = async () => {
        await axios
        .get(url)
        .then((response) => {
            setOdontologos(response.data);
        })
        .catch((error) => { console.log(error) });
    };

    //LLAMAMOS LA PETICION DENTRO DEL USEEFECT
        useEffect(() => {
        peticionesGet();
    },[]);
    return(
        <div>
            <h1>Lista de Odontologos</h1>
            <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Mantenimiento</th>            
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {odontologos?.map((Odontologo) => (
                    <tr key={Odontologo.codigoodontologo}>
                        <th scope="row">{Odontologo.codigoodontologo}</th>
                        <td>{Odontologo.nombre}</td>
                        <td>{Odontologo.apellido}</td>
                        <td>{Odontologo.dni}</td>
                        <td>{Odontologo.telefono}</td>
                        <td>
                        <Link to={`/odontologos/actualizar/${Odontologo.codigoodontologo}`} className="btn btn-success">Editar</Link>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </td>
                    </tr>
                     ))}                  
                </tbody>
            </table>
            </div>           
            <a href="odontologos/registrar" className="btn btn-primary"> Add Odontologo </a>
        </div>       
    );
}