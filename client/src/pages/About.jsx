import Defaultlayout from '../components/Defaultlayout';
import './about.scss';
export default function About({selected , setselected}) {
  setselected("about");
  return (
    <Defaultlayout>
    <h1>This is about page</h1>
    </Defaultlayout>
  )
}
