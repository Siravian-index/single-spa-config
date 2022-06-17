import * as React from 'react'
import ProviderCard from './ProviderCard'

interface IProviderListProps {}

export interface IProvider {
  id?: string
  name: string
  card: string
}

const ProviderList: React.FunctionComponent<IProviderListProps> = (props) => {
  const ENDPOINT = 'https://hardware-store-backend.herokuapp.com/v1/api/provider/'
  const [providers, setProviders] = React.useState<IProvider[]>([])

  React.useEffect(() => {
    const fetchProviders = async () => {
      const res = await fetch(ENDPOINT)
      return (await res.json()) as IProvider[]
    }
    fetchProviders().then((data) => setProviders(data))
  }, [])

  return (
    <>
      <h4>Fetching from {ENDPOINT}</h4>
      <h3>Provider</h3>
      {providers.map((p) => (
        <ProviderCard key={p.id} provider={p} />
      ))}
    </>
  )
}

export default ProviderList
