import PriceMapDisplay from '../Price/PriceMapDisplay'
import PageHeader from '../Reuse/PageHeader'
import PageLayout from '../Reuse/PageLayout'

const PricingPage = () => {
  return (
    <>
      <PageHeader title='Pricing Plans' />
      <PageLayout>
        <PriceMapDisplay />
      </PageLayout>
    </>
  )
}

export default PricingPage
