import '../App.css';
import '../animacion.css';
import calendario from "../Iconos/calendario.png";
import grafica from "../Iconos/linea-grafica.png"
import reportes from "../Iconos/reporte-de-negocios.png"

export default function LeftPanel(params) {
    

return(


<div className="visible col-1  align-items-center justify-content-center color3 mr-auto ml-auto  sombra testx">

<div className="justify-content-center ">

<div className="col-12  ml-2 mb-5 arriba testx">

<img  src={calendario} alt="Compromisos" width="75px" height="70px"  />
</div>

<div className="col-12 ml-2 testx">
<img  src={grafica} width="90px" height="90px" />

</div>

<div className="col-12 mt-5 abajo testx">

<img  src={reportes} width="90px" height="90px" />


</div>

</div>


</div>




);





}