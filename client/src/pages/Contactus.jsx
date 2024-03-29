import Defaultlayout from '../components/Defaultlayout';
import './contactus.scss';
export default function Contactus({selected , setselected}) {
  setselected("contact");
  return (
    <Defaultlayout>
    <h1>This is contact page</h1>
    </Defaultlayout>
  )
}
