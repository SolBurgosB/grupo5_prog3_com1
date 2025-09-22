import React from 'react'
import "./styles.css"

function Error404() {
  return (
    <div>
        <h1>Error 404</h1>
        <img src={`./images/Error.jpg`} alt={"Imagen de error"}/>
    </div>
  )
}

export default Error404