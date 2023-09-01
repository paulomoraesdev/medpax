'use state'

import Map, { Marker } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

import { ProfessionalContext } from '@/providers/ProfessionalProvider'
import { useContext, useEffect, useRef, useState } from 'react'

const DEFAULT_CENTER = {
  latitude: -22.9831, 
  longitude: -49.8569
}

export default function ProfessionalMap() {
  const map = useRef()
  const [ position, setPosition ] = useState(DEFAULT_CENTER)
  const { currentProfessional } = useContext(ProfessionalContext)

  useEffect(() => {
    if (!currentProfessional?.address) return setPosition(DEFAULT_CENTER)
    setPosition({
      longitude: currentProfessional.address.lon,
      latitude: currentProfessional.address.lat
    })
    map.current.flyTo({ center: { ...currentProfessional?.address }, zoom: 15 });
  }, [currentProfessional])

  return (
    <article className="relative h-full">
      {
        <Map
          ref={ map }
          initialViewState={{
            ...position,
            zoom: 12
          }}
          mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
          reuseMaps={ false }
        >
          {
            currentProfessional?.address &&
            <Marker longitude={ position.longitude } latitude={ position.latitude } color="blue" />
          }
        </Map>
      }
    </article>
  )
}
