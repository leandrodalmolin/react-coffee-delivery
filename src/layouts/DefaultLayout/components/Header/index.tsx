import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import { Wrapper } from '../../../../components/Wrapper'
import { BasketContext } from '../../../../contexts/BasketContext'
import { HeaderActions, HeaderContainer } from './styles'

export function Header() {
  const { totals } = useContext(BasketContext)

  return (
    <Wrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="" />
          <span className="visually-hidden">Home</span>
        </Link>
        <HeaderActions>
          {/*
            Disabled since it requires an API Key now
            <Location />
          */}
          <Link to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
            {totals.itemsQuantity > 0 && <span>{totals.itemsQuantity}</span>}
            <span className="visually-hidden">Basket</span>
          </Link>
        </HeaderActions>
      </HeaderContainer>
    </Wrapper>
  )
}
