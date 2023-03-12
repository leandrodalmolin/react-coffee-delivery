import { Coffee } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Card } from '../../Card'
import { Heading } from '../../Heading'
import { MessageContainer } from './styles'

export function EmptyBasketMessage() {
  return (
    <Card alignCenter>
      <MessageContainer>
        <Coffee size={50} />
        <Heading variant="h4">Oops, your basket is empty!</Heading>
        <p>
          Please, <Link to="/">go back to the shop</Link> and select a few
          items.
        </p>
      </MessageContainer>
    </Card>
  )
}
