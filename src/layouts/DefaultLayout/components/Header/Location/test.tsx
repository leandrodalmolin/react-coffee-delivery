import { render, screen, waitFor } from '@testing-library/react'
import { Location } from '.'

// Mock env variables
jest.mock(process.cwd() + '/src/utils/constants', () => ({
  GEOCODE_API_KEY: 'test',
}))

// Fetch mock
global.fetch = jest.fn()
const mockFetch = fetch as jest.MockedFunction<typeof fetch>

// Geolocation mock
// @ts-ignore
global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
}
const mockGeolocation = navigator.geolocation as jest.Mocked<
  typeof navigator.geolocation
>

const mockedGeolocationSuccessValues = {
  coords: {
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
    latitude: 0,
    longitude: 0,
  },
  timestamp: 0,
}

describe('Location Component', () => {
  it('renders location correctly', async () => {
    // Calls the callback forcing the success
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) =>
      success(mockedGeolocationSuccessValues),
    )

    // API success
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        address: { city: 'Bristol', country_code: 'gb' },
      }),
    } as any)

    render(<Location />)

    await waitFor(() => {
      expect(screen.getByText('Bristol, GB')).toBeInTheDocument()
    })
  })

  it('renders error feedback if geolocation fails', async () => {
    // Calls the callback forcing the error
    mockGeolocation.getCurrentPosition.mockImplementationOnce(
      (success, error) =>
        error &&
        error({
          code: 1,
          message: 'Error',
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3,
        }),
    )

    render(<Location />)

    await waitFor(() => {
      expect(screen.getByText('Not found')).toBeInTheDocument()
    })
  })

  it('renders error feedback if API fetch fails', async () => {
    // Calls the callback forcing the success
    mockGeolocation.getCurrentPosition.mockImplementationOnce((success) =>
      success(mockedGeolocationSuccessValues),
    )

    // API error
    mockFetch.mockRejectedValueOnce(new Error('Error'))

    render(<Location />)

    await waitFor(() => {
      expect(screen.getByText('Not found')).toBeInTheDocument()
    })
  })
})
