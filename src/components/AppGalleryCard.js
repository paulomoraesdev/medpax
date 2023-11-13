'use client'

import Image from "next/image"

export default function AppGalleryCard({ item, index }) {

  const handleClose = () => {
    const el = document.querySelector(`#lightbox-${index}`)
    el.checked = false
  }

  const handleOpen = () => {
    const el = document.querySelector(`#lightbox-${index}`)
    el.checked = true
  }

  return (
    <>
      <div className="card bg-base-100 shadow-xl p-2 cursor-pointer hover:bg-blue-50" onClick={ handleOpen }>
        <figure>
          <Image 
            src={ `https:${item.file.url}` } 
            alt={ item.title } 
            height={ 120 } 
            width={ 350 }  
            loading="lazy"
          />
        </figure>
        <div className="card-body p-2">
          {
            item.title &&
            <h2 className="card-title">{ item.title }</h2>
          }
          
          {
            item.description &&
            <p>{ item.description }</p>
          }
        </div>
      </div>
      <input type="checkbox" id={ `lightbox-${index}` } className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <Image 
            src={ `https:${item.file.url}` } 
            alt={ item.title } 
            height={ 1024 } 
            width={ 1024 }  
            loading="lazy"
          />
        </div>
        <label className="modal-backdrop" htmlFor={ `lightbox-${index}` }>Fechar</label>
      </div>
    </>
  )
}
