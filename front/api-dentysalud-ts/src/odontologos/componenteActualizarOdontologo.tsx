
import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { OdontologoDTO } from "./odontologo.model";

export default function ComponenteActualizarOdontologo() {

    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44372/api-dentysalud/odontologo/";
    const [odontologos, setOdontologos] = useState<OdontologoDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
        await axios
            .get(url + id)
            .then((response) => {
                setOdontologos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        peticionesGet();
    }, []);

    async function ActualizarOdontologo(odontologo: OdontologoDTO) {
        try {
            await axios.put(url + id, odontologo);
            history("/odontologos");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Actualizar Odontologos</h1>
            <Formik
                initialValues={{
                    codigoodontologo: 0,
                    nombre: "",
                    apellido:"",
                    dni:"",
                    telefono:"",                  
                }}
                onSubmit={async (valores) => {
                    await ActualizarOdontologo({
                        codigoodontologo: valores.codigoodontologo,
                        nombre: valores.nombre,
                        apellido: valores.apellido,
                        dni:valores.dni,
                        telefono:valores.telefono,
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
                                name="codigoodontologo"
                                type="text"
                                value={odontologos?.codigoodontologo}                             
                                className="form-control" readonly                        
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Nombre:</label>
                            <Field
                                name="nombre"
                                type="text"
                                value={odontologos?.nombre}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Apellido:</label>
                            <Field
                                name="apellido"
                                type="text"
                                value={odontologos?.apellido}
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
                                value={odontologos?.dni}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="form-label">Telefono:</label>
                            <Field
                                name="telefono"
                                type="text"
                                value={odontologos?.telefono}
                                className="form-control"
                            />
                        </div>
                    </div>
                               
                    <div className="row mt-2">
                        <div className="col-6">
                            <button type="submit" className="btn btn-success">
                                Actualizar
                            </button>
                            <Link className="btn btn-secondary" to="/odontologos">
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