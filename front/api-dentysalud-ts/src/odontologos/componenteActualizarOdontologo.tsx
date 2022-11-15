import { useParams } from "react-router-dom";

export default function ComponenteActualizarOdontologo() {

    //CREAMOS UNA VARIABLE PARA CAPTURAR EL CODIGO QUE SE VA A ACTUALIZAR
    const { id }: any = useParams();
    return (
        <div>
            <h1>Actualizar Odontologos</h1>
            <h2>El Id es : {id}</h2>
            <form>
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Nombre :</label>
                            <input type="text" className="form-control" id="txtNom" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido :</label>
                            <input type="text" className="form-control" id="txtApe" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">DNI :</label>
                            <input type="text" className="form-control" id="txtDni" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono :</label>
                            <input type="text" className="form-control" id="txtTel" required />
                        </div>
                        <button type="submit" className="btn btn-success form-control">Editar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}