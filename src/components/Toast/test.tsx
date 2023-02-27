import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RadixToastProvider, RadixToastViewport, Toast } from '.'
import { defaultTheme } from '../../styles/themes/default'

const mockOpenChange = jest.fn()

describe('Toast Component', () => {
  it('renders title and description correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <RadixToastProvider>
          <Toast
            open={true}
            title="Toast Title"
            description="Toast Description"
            onOpenChange={mockOpenChange}
          />
          <RadixToastViewport />
        </RadixToastProvider>
      </ThemeProvider>,
    )

    expect(screen.getByText('Toast Title')).toBeInTheDocument()
    expect(screen.getByText('Toast Description')).toBeInTheDocument()
  })

  it('closes toast when close button is clicked', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <RadixToastProvider>
          <Toast
            open={true}
            title="Toast Title"
            description="Toast Description"
            onOpenChange={mockOpenChange}
          />
          <RadixToastViewport />
        </RadixToastProvider>
      </ThemeProvider>,
    )

    const closeButton = screen.getByTestId('close-button')
    fireEvent.click(closeButton)

    expect(mockOpenChange).toHaveBeenCalled()
  })

  it('renders action component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <RadixToastProvider>
          <Toast
            open={true}
            title="Toast Title"
            description="Toast Description"
            onOpenChange={mockOpenChange}
            actionComponent={<button>Action button</button>}
          />
          <RadixToastViewport />
        </RadixToastProvider>
      </ThemeProvider>,
    )

    expect(screen.getByText('Action button')).toBeInTheDocument()
  })
})
