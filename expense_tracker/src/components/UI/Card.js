import './Card.css'

function Card(props) {
  const classes = 'card_ ' + props.className;
  return <div className={classes}>{props.children}</div>

}

export default Card;
