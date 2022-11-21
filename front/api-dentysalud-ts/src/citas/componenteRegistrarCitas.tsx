
export default function ComponenteRegistrarCitas() {
    return (
        <div>           
            <h1>Registro de Citas</h1>                      
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
                            <label className="form-label">Email :</label>
                            <input type="text" className="form-control" id="txtDni" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">DNI :</label>
                            <input type="text" className="form-control" id="txtDni" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono :</label>
                            <input type="text" className="form-control" id="txtTel" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Turno :</label>
                            <input type="text" className="form-control" id="txtTel" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha :</label>
                            <input type="text" className="form-control" id="txtTel" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mantenimiento :</label>
                            <input type="text" className="form-control" id="txtTel" required />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Registrar</button>                    
                    </div>
                </div>
            </form>
        </div>
    );
}