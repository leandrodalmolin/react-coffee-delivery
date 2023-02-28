import { render, screen } from '@testing-library/react'
import { TagsList } from '.'

describe('TagsList Component', () => {
  it('renders tag correctly', () => {
    render(<TagsList tags={['Traditional']} />)

    expect(screen.getByText('Traditional')).toBeInTheDocument()
  })

  it('renders right number of tags', () => {
    render(<TagsList tags={['Traditional', 'Special']} />)

    const items = screen.getAllByRole('listitem')
    expect(items.length).toEqual(2)
  })
})
