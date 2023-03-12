import styled from 'styled-components'
import heroBg from '../../assets/hero-bg.svg'
import { breakpoint } from '../../styles/breakpoints'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 3rem;
  background-image: url(${heroBg});
  background-size: contain;
  background-position: center 85%;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  @media ${breakpoint.md} {
    padding: 2.5rem 0 4rem;
  }

  @media ${breakpoint.lg} {
    background-position: center;
    min-height: 544px; // set image height to prevent gradient being cropped
  }
`

export const HeroSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;

  @media ${breakpoint.md} {
    gap: 3.4rem;
    flex-direction: row;

    > div {
      flex: 1;
    }
  }

  @media ${breakpoint.lg} {
    > div {
      &:first-child {
        flex: 1;
      }

      &:last-child {
        flex: 0 0 auto;
      }
    }
  }
`

export const HeroHeading = styled.div`
  margin-bottom: 2.25rem;

  h1 {
    margin-bottom: 1.25rem;
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.font.cursive};
    font-weight: 800;
    line-height: 1.1;
    color: ${({ theme }) => theme['base-900']};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-800']};
  }

  @media ${breakpoint.lg} {
    margin-bottom: 4.1rem;

    h1 {
      font-size: 3rem;
      line-height: 1.3;
    }
  }
`

export const HeroList = styled.ul`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 1.3;
  }

  @media ${breakpoint.sm} {
    gap: 1.25rem;
    grid-template-columns: repeat(2, 1fr);
  }
`
