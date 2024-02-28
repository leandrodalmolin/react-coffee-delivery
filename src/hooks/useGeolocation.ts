import { useCallback } from 'react'
import { GEOCODE_API_KEY, getPosition } from '../utils'

type AddressType = {
  city: string
  country: string
  country_code: string
  county: string
  house_number: string
  postcode: string
  road: string
  state: string
  state_district: string
  suburb: string
}

export function useGeolocation() {
  // Extract coordinates from GeolocationPosition
  const getCoords = useCallback(async () => {
    try {
      const { coords } = await getPosition()
      return coords
    } catch (error) {
      throw new Error('Geolocation not allowed')
    }
  }, [])

  // Fetch address from API based on latitude and longitude
  const fetchAddressFromAPI = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${GEOCODE_API_KEY}`,
        )
        const { address } = (await response.json()) as { address: AddressType }
        return address
      } catch (error) {
        throw new Error('Could not connect to API')
      }
    },
    [],
  )

  return {
    getCoords,
    fetchAddressFromAPI,
  }
}
