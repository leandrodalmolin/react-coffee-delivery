import { ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import { Wrapper } from '../../styles'
import { Location } from '../Location'
import { HeaderActions, HeaderContainer } from './styles'

export function Header() {
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
          </Link>
        </HeaderActions>
      </HeaderContainer>
    </Wrapper>
  )
}
