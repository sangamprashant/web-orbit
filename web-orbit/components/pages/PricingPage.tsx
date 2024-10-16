import { priceBanner } from '@/assets/assets'
import PriceMapDisplay from '../Price/PriceMapDisplay'
import PageBanner from '../Reuse/PageBanner'
import PageHeader from '../Reuse/PageHeader'
import PageLayout from '../Reuse/PageLayout'
// import PricingBanner from './pricing/PricingBanner'

const PricingPage = () => {
  return (
    <>
      <PageHeader title='Pricing Plans' />
      <PageBanner
        title="Pricing that"
        title2="Scales with you"
        description="Choose the best plan that fits your needs and start your journey with us today!"
        image={priceBanner}
      />
      <PageLayout>
        <PriceMapDisplay />
      </PageLayout>
    </>
  )
}

export default PricingPage
