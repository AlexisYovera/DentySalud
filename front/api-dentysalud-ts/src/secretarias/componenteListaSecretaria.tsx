export default function componenteListaSecretaria() {
    return (
        <div>
            <h1>Lista de Secretaria</h1>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Mantenimineto</th>

                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Jana</td>
                            <td>Otto</td>
                            <td>12345678</td>
                            <td>123456789</td>
                            <td>
                                <a href="#" className="btn btn-success">Editar</a>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Liset</td>
                            <td>Thornton</td>
                            <td>87654321</td>
                            <td>987654321</td>
                            <td>
                                <a href="#" className="btn btn-success">Editar</a>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Marry</td>
                            <td>Bird</td>
                            <td>15975346</td>
                            <td>159753456</td>
                            <td>
                                <a href="#" className="btn btn-success">Editar</a>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <a href="secretarias/registrar" className="btn btn-primary"> Add Secretaria </a>
        </div>
    );
}