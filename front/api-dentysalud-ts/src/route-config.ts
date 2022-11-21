import componenteActualizarOdontologo from "./odontologos/componenteActualizarOdontologo";
import componenteListaOdontologo from "./odontologos/componenteListaOdontologo";
import componenteRegistrarOdontologo from "./odontologos/componenteRegistrarOdontologo";
import componentePrincipal from "./principal/componentePrincipal";
import componenteRedireccional from "./principal/componenteRedireccional";
import componenteActualizarSecretaria from "./secretarias/componenteActualizarSecretaria";
import componenteListaSecretaria from "./secretarias/componenteListaSecretaria";
import componenteRegistrarSecretaria from "./secretarias/componenteRegistrarSecretaria";
import componenteActualizarCitas from "./citas/componenteActualizarCitas";
import componenteListaCitas from "./citas/componenteListaCitas";
import componenteRegistrarCitas from "./citas/componenteRegistrarCitas";

const rutas=[
    {path:'/',componente:componentePrincipal},
    {path:'/citas/actualizar/:id',componente:componenteActualizarCitas},
    {path:'/citas/registrar',componente:componenteRegistrarCitas},
    {path:'/citas',componente:componenteListaCitas},
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