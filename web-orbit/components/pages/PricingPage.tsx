import PriceMapDisplay from '../Price/PriceMapDisplay'
import PageHeader from '../Reuse/PageHeader'
import PageLayout from '../Reuse/PageLayout'
import PricingBanner from './pricing/PricingBanner'

const PricingPage = () => {
  return (
    <>
      <PageHeader title='Pricing Plans' />
      <PricingBanner />
      <PageLayout>
        <PriceMapDisplay />
      </PageLayout>
    </>
  )
}

export default PricingPage
