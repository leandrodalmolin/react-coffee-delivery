// Map env variables so they can be mocked in Jest
const { VITE_GEOCODE_API_KEY: GEOCODE_API_KEY } = import.meta.env

export { GEOCODE_API_KEY }
