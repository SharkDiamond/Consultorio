import {slide as Menu} from "react-burger-menu";



export default function Barra(params) {
    



return(
<div className="" >
<Menu menuClassName={ "test " } burgerButtonClassName={ "botonFuera d-block d-md-none d-xl-none" } crossButtonClassName={ "botonDentro" }>

<a id="home" className="letramenuresponsive"  href="/General">General</a>
<a id="about" className="letramenuresponsive" href="/Graficas">Graficas</a>
<a id="contact" className="letramenuresponsive" href="/Agenda">Agenda</a>


</Menu></div>)




}



