import './defualtlayout.scss';

export default function Defaultlayout(props) {
  return (
     <div className="layout">
        <div className="navbar">

        </div>
        <hr />
        <div className="content">
            {props.children }
        </div>
     </div>
  )
}
