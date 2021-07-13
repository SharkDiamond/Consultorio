import {Line,Bar} from "react-chartjs-2";
import '../App.css';
import '../animacion.css';


export default function halfPanel() {

    

    const dataLineal = {

        labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        
        datasets: [
            {
                label: 'Citas Este Año',
    
                data: [12,12,34,345,42,34,45,46,56],
                backgroundColor: [
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82',
    
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82',
                    '#126E82'
    
                ],
                borderColor: [
                    '#126E82'
                   
                ],
    
                borderWidth: 5,
            },
        ],
    };
      

    const dataBar = {

        labels: ["Pacientes","Citas","Reportes Medicos"],
        
        datasets: [
            {
                label: 'General Info',
    
                data: [12,12,34],
                backgroundColor: [
                    '#126E82',
                    '#126E82',
                    '#126E82'
                    
    
                ],
                borderColor: [
                    '#126E82'
                   
                ],
    
                borderWidth: 0,
            },
        ],
    };
      

return(

    <div className="testx sombra d-none d-lg-block d-md-block col-lg-6  col-md-6 colorPanelMedio mr-auto ml-auto  pt-4 pl-5 pr-5 pb-4  ">
    
    <div className="row">


    <div className="col-12 testx">

    <Line data={dataLineal} className="grafica p-3  rounded text-primary"/>
    
    </div>

    </div>

    <div className="row">

    <div className="col-12 testx">
    <Bar data={dataBar} className="grafica mt-3 p-3  rounded"/>

    </div>
    

    </div>
    
    
    </div>);



}
