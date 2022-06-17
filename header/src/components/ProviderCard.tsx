import * as React from 'react'
import { IProvider } from './ProviderList'

interface IProviderCardProps {
  provider: IProvider
}

const ProviderCard: React.FunctionComponent<IProviderCardProps> = ({ provider }) => {
  return (
    <div>
      <div>{provider.id}</div>
      <div>{provider.name}</div>
      <div>{provider.card}</div>
    </div>
  )
}

export default ProviderCard
