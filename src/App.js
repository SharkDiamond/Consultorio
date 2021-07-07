import RightPanel from "./Parts/RightPart";
import PanelMedio from "./Parts/MediaPart";
import LeftPanel from "./Parts/LeftPart";


function App() {
  
  
  
  return (
  <div className="Container-fluid color p-4">

<div className="row">

<LeftPanel/>

<PanelMedio/>



<RightPanel/>

</div>


  </div>
    
  );
}

export default App;
