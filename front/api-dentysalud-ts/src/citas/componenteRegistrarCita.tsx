import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { CitaRegistrarDTO } from "./cita.model";


export default function ComponenteRegistrarCita() {
    const history = useNavigate();
    const url = "https://localhost:44372/api-dentysalud/cita";
    async function RegistrarCita(cita: CitaRegistrarDTO) {
        try {
            await axios.post(url, cita);
            history("/citas")
        } catch (error) {
            console.log(error);
        }
    }    
    return (
        <div>
            <h1>Registro de Cita</h1>
            <Formik
                initialValues={{
                    nombrepaciente: "",
                    apellidopaciente: "",
                    local: "",
                    hora: "",
                    fecha: ""
                }}
                onSubmit={
                    async (valores) => {                  
                        await new Promise((r) => setTimeout(r, 3000));
                        await RegistrarCita({nombrepaciente:valores.nombrepaciente,
                                            apellidopaciente:valores.apellidopaciente,
                                            local:valores.local,
                                            hora:valores.hora,
                                            fecha:valores.fecha});
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
                                <label className="form-label" htmlFor="nombrepaciente">Nombre Paciente :</label>
                                <Field name="nombrepaciente" className="form-control" />
                                <ErrorMessage name="nombrepaciente">{(mensaje) => (
                                    <div className="alert alert-warning" role="alert">
                                        {mensaje}
                                    </div>)}
                                </ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="apellidopaciente">Apellido Paciente:</label>
                                <Field name="apellidopaciente" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="local">Local :</label>
                                <Field name="local" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="hora">Hora :</label>
                                <Field name="hora" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="fecha">Fecha :</label>
                                <Field name="fecha" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary form-control">Registrar</button>
                            <Link className="btn btn-secondary form-control mt-2" to="/citas" >Cancelar</Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}