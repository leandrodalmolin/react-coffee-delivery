import { ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Location } from '../Location'
import { HeaderActions, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <HeaderActions>
        <Location />
        <Link to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
        </Link>
      </HeaderActions>
    </HeaderContainer>
  )
}
