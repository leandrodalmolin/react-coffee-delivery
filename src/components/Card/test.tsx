import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card Component', () => {
  it('renders correctly', () => {
    render(<Card>Card content</Card>)

    expect(screen.getByText('Card content')).toBeInTheDocument()
  })
})
