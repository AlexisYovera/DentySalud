import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import { CitaDTO } from "./cita.model";
export default function ComponenteActualizarCita() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44372/api-dentysalud/cita/";
    const [citas, setCitas] = useState<CitaDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
        await axios
            .get(url + id)
            .then((response) => {
                setCitas(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        peticionesGet();
    }, []);

    async function ActualizarCita(cita: CitaDTO) {
        try {
            await axios.put(url + id, cita);
            history("/citas");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Actualizar Cita</h1>
            <Formik
                initialValues={{
                    idcita: 0,
                    nombrepaciente: "",
                    apellidopaciente:"",
                    local:"",
                    hora:"",
                    fecha:"",

                }}
                onSubmit={async (valores) => {
                    await ActualizarCita({
                        idcita: valores.idcita,
                        nombrepaciente: valores.nombrepaciente,
                        apellidopaciente: valores.apellidopaciente,
                        local:valores.local,
                        hora:valores.hora,
                        fecha:valores.fecha, 
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
                            <label className="form-label">idcita:</label>
                            <Field
                                name="idcita"
                                type="text"
                                value={citas?.idcita}                             
                                className="form-control"
                                readonly
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Nombre:</label>
                            <Field
                                name="nombrepaciente"
                                type="text"
                                value={citas?.nombrepaciente}
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
                                value={citas?.apellidopaciente}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Local:</label>
                            <Field
                                name="local"
                                type="text"
                                value={citas?.local}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Hora:</label>
                            <Field
                                name="hora"
                                type="text"
                                value={citas?.hora}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Fecha:</label>
                            <Field
                                name="fecha"
                                type="text"
                                value={citas?.fecha}
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
