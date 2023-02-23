import { HeroContainer, HeroHeading, HeroList, HeroSections } from './styles'
import heroImage from '../../../../assets/hero-image.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RoundedIcon } from '../../../../components/RoundedIcon'
import { Wrapper } from '../../../../components/Wrapper'

export function Hero() {
  const theme = useTheme()

  return (
    <HeroContainer>
      <Wrapper>
        <HeroSections>
          <div>
            <HeroHeading>
              <h1>Find the perfect coffee for any time of day</h1>
              <h4>
                With Coffee Delivery you get your coffee wherever you are,
                anytime
              </h4>
            </HeroHeading>
            <HeroList>
              <li>
                <RoundedIcon background={theme['yellow-700']}>
                  <ShoppingCart weight="fill" />
                </RoundedIcon>
                Simple and secure purchase
              </li>
              <li>
                <RoundedIcon>
                  <Package weight="fill" />
                </RoundedIcon>
                Packaging keeps the coffee intact
              </li>
              <li>
                <RoundedIcon background={theme['yellow-500']}>
                  <Timer weight="fill" />
                </RoundedIcon>
                Fast and tracked delivery
              </li>
              <li>
                <RoundedIcon background={theme['purple-500']}>
                  <Coffee weight="fill" />
                </RoundedIcon>
                Coffee arrives fresh to you
              </li>
            </HeroList>
          </div>
          <div>
            <img src={heroImage} alt="" />
          </div>
        </HeroSections>
      </Wrapper>
    </HeroContainer>
  )
}
