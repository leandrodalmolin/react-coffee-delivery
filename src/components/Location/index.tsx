import { MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { LocationContainer } from './styles'

export function Location() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // Success
      async ({ coords }) => {
        try {
          const response = await fetch(
            `https://geocode.maps.co/reverse?lat=${coords.latitude}&lon=${coords.longitude}`,
          )
          const { address } = await response.json()
          setLocation(`${address.city}, ${address.country_code.toUpperCase()}`)
        } catch (error: any) {
          setLocation('Not found')
        }
      },
      // Error
      () => setLocation('Not found'),
    )
  }, [])

  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      {location}
    </LocationContainer>
  )
}
