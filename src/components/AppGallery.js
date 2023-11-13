'use client'

import AppGalleryCard from "./AppGalleryCard";

export default function AppGallery({ gallery, title = 'Galeria de Fotos' }) {
  return (
    <>
      <h1 className="text-[1.5rem] font-bold leading-[2rem] tracking-tight text-black mt-4">{ title }:</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5 ">
        {
          gallery.map((item, index) => (
            <AppGalleryCard key={ index } index={ index } item={ item.fields } />
          ))
        }
      </section>
    </>
  )
}