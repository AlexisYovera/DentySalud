import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { OdontologoRegistrarDTO } from "./odontologo.model";
import * as Yup from 'yup';

export default function ComponenteRegistrarOdontologo() {
    const history = useNavigate();
    const url = "https://localhost:44372/api-dentysalud/odontologo";
    async function RegistrarOdontologo(odontologo: OdontologoRegistrarDTO) {
        try {
            await axios.post(url, odontologo);
            history("/odontologos")
        } catch (error) {
            console.log(error);
        }
    }    
    return (
        <div>
            <h1>Registro de Odontologo</h1>
            <Formik
                initialValues={{
                    nombre: "",
                    apellido: "",
                    dni: "",
                    telefono: ""               
                }}
                onSubmit={
                    async (valores) => {                  
                        await new Promise((r) => setTimeout(r, 3000));
                        await RegistrarOdontologo({nombre:valores.nombre,
                            apellido:valores.apellido,
                            dni:valores.dni,
                            telefono:valores.telefono});
                    }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string().required('Este campo es requerido')
                    })
                }
            >
                <Form className="form-control">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="nombre">Nombre:</label>
                                <Field name="nombre" className="form-control" />
                                <ErrorMessage name="nombre">{(mensaje) => (
                                    <div className="alert alert-warning" role="alert">
                                        {mensaje}
                                    </div>)}
                                </ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="apellido">Apellido:</label>
                                <Field name="apellido" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="dni">DNI :</label>
                                <Field name="dni" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="telefono">Telefono :</label>
                                <Field name="telefono" className="form-control" />
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