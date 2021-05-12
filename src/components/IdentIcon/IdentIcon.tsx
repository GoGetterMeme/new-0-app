import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Jazzicon from 'jazzicon'

import { useActiveWeb3React } from '../../hooks'

const StyledIdentIconContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`

const IdentIcon = () => {
  const ref = useRef<HTMLDivElement>()

  const { account } = useActiveWeb3React()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(32, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdentIconContainer ref={ref as any} />
}

export default IdentIcon
