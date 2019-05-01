import React from 'react'

const style = {
  width: "10rem",
  backgroundColor: "#ddd"

}

function Card(props) {
  return (
    <div className="card" style={style}  onChange={() =>props.handleShuffleRerender} onClick={() => props.handleClick(props.id)}>
      <img className="card-img-top" src={props.src} alt={props.img}/>
    </div>        
  )
}

export default Card
