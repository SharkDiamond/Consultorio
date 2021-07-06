import '../App.css';
import calendario from "../Iconos/calendario.png";
import grafica from "../Iconos/linea-grafica.png"
import reportes from "../Iconos/reporte-de-negocios.png"

export default function LeftPanel(params) {
    

return(


<div className="col-1 d-flex align-items-center justify-content-center color3 ml-5 mr-4  borderDivsPrincipales rounded">

<div className="justify-content-center">

<div className="col-12  ml-2 mb-5 arriba">

<img  src={calendario} alt="Compromisos" width="75px" height="70px"  />
</div>

<div className="col-12 ml-2">
<img  src={grafica} width="90px" height="90px" />

</div>

<div className="col-12 mt-5 abajo">

<img  src={reportes} width="90px" height="90px" />


</div>

</div>


</div>




);





}