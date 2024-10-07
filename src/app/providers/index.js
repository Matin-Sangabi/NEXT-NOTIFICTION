import React from 'react'
import ReactQuery from './ReactQuery'
import NextUi from './NextUi'

export default function Providers({children}) {
  return (
    <ReactQuery>
        <NextUi>
            {children}
        </NextUi>
    </ReactQuery>
  )
}
