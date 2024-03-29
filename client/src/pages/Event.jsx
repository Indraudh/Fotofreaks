import Defaultlayout from '../components/Defaultlayout';
import './event.scss';
export default function Event({selected , setselected}) {
  setselected("event");
  return (
    <Defaultlayout>
    <h1>This is Event page</h1>
    </Defaultlayout>
  )
}
