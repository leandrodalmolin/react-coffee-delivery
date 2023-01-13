import styled, { css } from 'styled-components'

const HeadingBase = css`
  font-family: ${({ theme }) => theme.font.cursive};
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-800']};
`

export const HeadingXL = styled.h2`
  ${HeadingBase}
  font-size: 3rem;
`

export const HeadingLG = styled.h3`
  ${HeadingBase}
  font-size: 2rem;
`

export const HeadingMD = styled.h4`
  ${HeadingBase}
  font-size: 1.25rem;
`

export const HeadingSm = styled.h5`
  ${HeadingBase}
  font-size: 1.125rem;
`
