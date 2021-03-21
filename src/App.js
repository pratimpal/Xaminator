//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Appheader from "./component/Appheader";
import Appcore   from "./component/Appcore";
import Appfooter from "./component/Appfooter";

function App() {
  return (
    <div>
      <Appheader />
      <Appcore />
      <Appfooter />
    </div>
  );
}

export default App;
