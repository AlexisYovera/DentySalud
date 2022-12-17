import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SecretariaDTO } from "./secretaria.model";

export default function ComponenteListaSecretaria() {
    const url = "https://localhost:44372/api-dentysalud/secretaria";
    const [secretarias, setSecretarias] = useState<SecretariaDTO[]>();
    const peticionesGet = async () => {
        await axios
            .get(url)
            .then((response) => {
                setSecretarias(response.data);
            })
            .catch((error) => { console.log(error) });
    };

    //LLAMAMOS LA PETICION DENTRO DEL USEEFECT
    useEffect(() => {
        peticionesGet();
    }, []);
    return (
        <div>
            <h1>Lista de Secretaria</h1>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Mantenimineto</th>

                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {secretarias?.map((Secretaria) => (
                        <tr key={Secretaria.codigosecretaria}>
                            <th scope="row">{Secretaria.codigosecretaria}</th>
                            <td>{Secretaria.nombre}</td>
                            <td>{Secretaria.apellido}</td>
                            <td>{Secretaria.dni}</td>
                            <td>{Secretaria.telefono}</td>
                            <td>
                            <Link to={`/secretarias/actualizar/${Secretaria.codigosecretaria}`} className="btn btn-success">Editar</Link>

                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                        ))}  
                    </tbody>
                </table>
            </div>

            <a href="secretarias/registrar" className="btn btn-primary"> Add Secretaria </a>
        </div>
    );
}