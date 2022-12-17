import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { PacienteRegistrarDTO } from "./paciente.model";
export default function ComponenteRegistrarPaciente(){
    const history = useNavigate();
    const url = "https://localhost:44372/api-dentysalud/paciente";
    async function RegistrarPaciente(paciente: PacienteRegistrarDTO) {
        try {
            await axios.post(url, paciente);
            history("/pacientes")
        } catch (error) {
            console.log(error);
        }
    }    
    return (
        <div>
            <h1>Registro de Paciente</h1>
            <Formik
                initialValues={{
                    nombrepaciente: "",
                    apellidopaciente: "",
                    dni: "",
                    telefonopaciente: "",
                    correo: ""
                }}
                onSubmit={
                    async (valores) => {                  
                        await new Promise((r) => setTimeout(r, 3000));
                        await RegistrarPaciente({nombrepaciente:valores.nombrepaciente,
                            apellidopaciente:valores.apellidopaciente,
                            dni:valores.dni,
                            telefonopaciente:valores.telefonopaciente,
                            correo:valores.correo});
                    }}
                validationSchema={
                    Yup.object({
                        nombrepaciente: Yup.string().required('Este campo es requerido')
                    })
                }
            >
                <Form className="form-control">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="nombrepaciente">Nombre:</label>
                                <Field name="nombrepaciente" className="form-control" />
                                <ErrorMessage name="nombrepaciente">{(mensaje) => (
                                    <div className="alert alert-warning" role="alert">
                                        {mensaje}
                                    </div>)}
                                </ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="apellidopaciente">Apellido:</label>
                                <Field name="apellidopaciente" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="dni">DNI :</label>
                                <Field name="dni" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="telefonopaciente">Telefono :</label>
                                <Field name="telefonopaciente" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="correo">Correo :</label>
                                <Field name="correo" className="form-control" />
                            </div>                        
                            <button type="submit" className="btn btn-primary form-control">Registrar</button>
                            <Link className="btn btn-secondary form-control mt-2" to="/odontologos" >Cancelar</Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}