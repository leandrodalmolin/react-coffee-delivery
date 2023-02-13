import styled from 'styled-components'
import { breakpoint } from '../../../styles/breakpoints'

export const SelectedProductsList = styled.ul`
  list-style: none;
`

export const SelectedProductsItem = styled.li`
  display: grid;
  gap: 1.25rem;
  padding: 0.25rem;

  @media ${breakpoint.md} {
    grid-template-columns: 4rem 3fr 1fr;
  }
`
export const ItemLeftContainer = styled.div`
  img {
    display: block;
    max-width: 4rem;
    width: 100%;
  }
`

// 1. Keep same height
export const ItemCentralContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;

  > p {
    flex-basis: 100%;
    color: ${({ theme }) => theme['base-800']};
  }

  // Override quantity control
  > div {
    height: auto;
    padding: 0.3rem 0.5rem; // [1]
  }

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    border: 0;
    padding: 0.3rem 0.5rem; // [1]
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-700']};
    background-color: ${({ theme }) => theme['base-400']};
    cursor: pointer;
    transition: background-color 300ms;

    &:hover {
      background-color: ${({ theme }) => theme['base-500']};
    }
  }
`

export const ItemRightContainer = styled.div`
  font-weight: 700;

  @media ${breakpoint.md} {
    text-align: right;
  }
`

export const Divider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme['base-400']};
  margin: 1.5rem 0;
`
