import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { PacienteDTO } from "./paciente.model"; 
export default function ComponenteActualizarPaciente() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44372/api-dentysalud/paciente/";
    const [pacientes, setPacientes] = useState<PacienteDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
        await axios
            .get(url + id)
            .then((response) => {
                setPacientes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        peticionesGet();
    }, []);

    async function ActualizarPaciente(paciente: PacienteDTO) {
        try {
            await axios.put(url + id, paciente);
            history("/pacientes");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Actualizar Paciente</h1>
            <Formik
                initialValues={{
                    idpaciente: 0,
                    nombrepaciente: "",
                    apellidopaciente:"",
                    dni:0,
                    telefonopaciente:0,
                    correo:"",

                }}
                onSubmit={async (valores) => {
                    await ActualizarPaciente({
                        idpaciente: valores.idpaciente,
                        nombrepaciente: valores.nombrepaciente,
                        apellidopaciente: valores.apellidopaciente,
                        dni:valores.dni,
                        telefonopaciente:valores.telefonopaciente,
                        correo:valores.correo, 
                    });
                }}
                validationSchema={Yup.object({
                    nombrepaciente: Yup.string()
                        .required("Este campo es requerido")
                        .max(100, "La longitud máxima del nombre es 100 caracteres"),
                })}
            >
                <Form>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">CODIGO:</label>
                            <Field
                                name="idpaciente"
                                type="text"
                                value={pacientes?.idpaciente}                             
                                className="form-control" readonly                        
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Nombre:</label>
                            <Field
                                name="nombrepaciente"
                                type="text"
                                value={pacientes?.nombrepaciente}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Apellido:</label>
                            <Field
                                name="apellidopaciente"
                                type="text"
                                value={pacientes?.apellidopaciente}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">DNI:</label>
                            <Field
                                name="dni"
                                type="text"
                                value={pacientes?.dni}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Telefono:</label>
                            <Field
                                name="telefonopaciente"
                                type="text"
                                value={pacientes?.telefonopaciente}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Correo:</label>
                            <Field
                                name="correo"
                                type="text"
                                value={pacientes?.correo}
                                className="form-control"
                            />
                        </div>
                    </div>

                    
                    <div className="row mt-2">
                        <div className="col-6">
                            <button type="submit" className="btn btn-success">
                                Actualizar
                            </button>
                            <Link className="btn btn-secondary" to="/citas">
                                Cancelar
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik>

            <hr />
        </div>
    );
}
