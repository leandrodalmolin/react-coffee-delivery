import { render, screen } from '@testing-library/react'
import { CardHeading } from '.'

describe('CardHeading Component', () => {
  it('renders heading and subheading texts correctly', () => {
    render(<CardHeading heading="Heading" subheading="Subheading" />)

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Subheading')).toBeInTheDocument()
  })

  it('renders children elements correctly', () => {
    render(
      <CardHeading heading="Heading" subheading="Subheading">
        <p>Icon placeholder</p>
      </CardHeading>,
    )

    expect(screen.getByText('Icon placeholder')).toBeInTheDocument()
  })
})
