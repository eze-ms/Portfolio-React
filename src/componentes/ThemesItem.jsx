import React from 'react'

const ThemesItem = ({color, img, changeColor}) => {
  console.log(img); // Agrega esta línea para imprimir la ruta de la imagen en la consola

  return (
    <div>
      <img src={img} alt="" className='theme__img' onClick={() =>
      changeColor(color)} />
    </div>
  )
}

export default ThemesItem

