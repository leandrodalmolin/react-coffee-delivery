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
  // Promisified getCurrentPosition method
  function getPosition() {
    // eslint-disable-next-line no-undef
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
      )
    })
  }

  // Extract coordinates from GeolocationPosition
  async function getCoords() {
    try {
      const { coords } = await getPosition()
      return coords
    } catch (error: any) {
      throw new Error('Geolocation not allowed')
    }
  }

  // Fetch address from API based on latitude and longitude
  async function fetchAddressFromAPI(latitude: number, longitude: number) {
    try {
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`,
      )
      const { address } = (await response.json()) as { address: AddressType }
      return address
    } catch (error: any) {
      throw new Error('Could not connect to API')
    }
  }

  return {
    getCoords,
    fetchAddressFromAPI,
  }
}
