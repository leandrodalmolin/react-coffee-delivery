import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { HeaderActions, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <HeaderActions>
        <div>
          <MapPin size={22} weight="fill" /> Bristol, UK
        </div>
        <Link to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
        </Link>
      </HeaderActions>
    </HeaderContainer>
  )
}
