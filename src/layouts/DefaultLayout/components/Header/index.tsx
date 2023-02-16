import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import { BasketContext } from '../../../../contexts/BasketContext'
import { Wrapper } from '../../styles'
import { Location } from './Location'
import { HeaderActions, HeaderContainer } from './styles'

export function Header() {
  const { items: basketItems } = useContext(BasketContext)
  const numberOfBasketItems = basketItems.length

  return (
    <Wrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <HeaderActions>
          <Location />
          <Link to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
            {numberOfBasketItems > 0 && <span>{numberOfBasketItems}</span>}
          </Link>
        </HeaderActions>
      </HeaderContainer>
    </Wrapper>
  )
}
