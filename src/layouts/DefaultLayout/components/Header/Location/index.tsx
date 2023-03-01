import { MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { LocationContainer } from './styles'
import {
  getCoords,
  fetchAddressFromAPI,
} from '../../../../../utils/geolocation'

export function Location() {
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  async function fetchLocation() {
    try {
      const { latitude, longitude } = await getCoords()
      const address = await fetchAddressFromAPI(latitude, longitude)
      setLocation(`${address.city}, ${address.country_code.toUpperCase()}`)
    } catch (error: any) {
      setLocation('Not found')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      {loading && <p>Loading...</p>}
      {!loading && location}
    </LocationContainer>
  )
}
