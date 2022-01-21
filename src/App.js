import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';
import {dateCellRender, monthCellRender} from './Algo'

function App() {
  
  return (
<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />);
}

export default App;
