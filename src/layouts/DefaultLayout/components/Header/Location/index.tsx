import { MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useGeolocation } from '../../../../../hooks/useGeolocation'
import { LocationContainer } from './styles'

export function Location() {
  const { getCoords, fetchAddressFromAPI } = useGeolocation()
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLocation() {
      try {
        const { latitude, longitude } = await getCoords()
        const address = await fetchAddressFromAPI(latitude, longitude)
        const place = address.city || address.county
        const countryCode = address.country_code.toUpperCase()
        setLocation(`${place}, ${countryCode}`)
      } catch (error) {
        setLocation('Not found')
      } finally {
        setLoading(false)
      }
    }
    fetchLocation()
  }, [getCoords, fetchAddressFromAPI])

  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      {loading && <p>Loading...</p>}
      {!loading && location}
    </LocationContainer>
  )
}
