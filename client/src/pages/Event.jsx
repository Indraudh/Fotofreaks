import Defaultlayout from '../components/Defaultlayout';
import './event.scss';
function Events({setselected}) {
  setselected("event");
  return (
    <Defaultlayout>
    <h1>Event page</h1>
    </Defaultlayout>
  )
}

export default Events;