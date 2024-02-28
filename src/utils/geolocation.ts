// Promisified getCurrentPosition method
export function getPosition() {
  // eslint-disable-next-line no-undef
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
    )
  })
}
