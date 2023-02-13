import styled from 'styled-components'

export const OrderTotalsTable = styled.table`
  line-height: 1.3;

  th {
    font-size: 0.875rem;
    font-weight: 400;
  }

  td {
    text-align: right;
  }

  tr {
    th,
    td {
      padding-bottom: 0.6rem;
    }

    &:last-child {
      th,
      td {
        padding-bottom: 0;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }
`
