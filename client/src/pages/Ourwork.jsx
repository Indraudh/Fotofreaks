import Defaultlayout from '../components/Defaultlayout';
import './ourwork.scss';
export default function Ourwork({selected , setselected}) {
  setselected("portfolio");
  return (
    <Defaultlayout>
    <h1>This is Our Work page</h1>
    </Defaultlayout>
  )
}
