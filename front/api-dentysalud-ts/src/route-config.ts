import componenteActualizarOdontologo from "./odontologos/componenteActualizarOdontologo";
import componenteListaOdontologo from "./odontologos/componenteListaOdontologo";
import componenteRegistrarOdontologo from "./odontologos/componenteRegistrarOdontologo";
import componentePrincipal from "./principal/componentePrincipal";
import componenteRedireccional from "./principal/componenteRedireccional";
import componenteActualizarSecretaria from "./secretarias/componenteActualizarSecretaria";
import componenteListaSecretaria from "./secretarias/componenteListaSecretaria";
import componenteRegistrarSecretaria from "./secretarias/componenteRegistrarSecretaria";

const rutas=[
    {path:'/',componente:componentePrincipal},
    {path:'/odontologos',componente:componenteListaOdontologo},
    {path:'/odontologos/registrar',componente:componenteRegistrarOdontologo},
    {path:'/odontologos/actualizar/:id',componente:componenteActualizarOdontologo},
    {path:'/secretarias',componente:componenteListaSecretaria},
    {path:'/secretarias/registrar',componente:componenteRegistrarSecretaria},
    {path:'/secretarias/actualizar/:id',componente:componenteActualizarSecretaria},
    //CREAMOS UN PATH PARA RUTAS NO ENCONTRADAS
    {path:'*',componente:componenteRedireccional}
]

export default rutas;