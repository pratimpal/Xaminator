import Loginbar from "./loginbar"
import Appnavbar from "./Appnavbar"

function Appheader() {
    return (
      <div>
        
        <Appnavbar />
        <header className="App-header">
            <h1> Xaminator </h1> 
            <h2>Online Examination Portal</h2>
        </header>
      </div>
    );
  }
  
export default Appheader;
  