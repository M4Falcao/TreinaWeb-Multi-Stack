import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/safeEnvironment'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment/>
    </div>
  )
}

export default Home
