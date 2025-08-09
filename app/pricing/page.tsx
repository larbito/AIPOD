import { Pricing } from '@/components/Pricing'

export default function PricingPage() {
  return (
    <div className="container-max py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Plans that scale with you</h1>
        <p className="text-gray-600 dark:text-gray-300">Start free, upgrade when you’re ready.</p>
      </div>
      <Pricing />
    </div>
  )
}
