export default function CancelPage() {
  return (
    <div className="container-max py-16">
      <h1 className="text-3xl font-bold mb-2">Checkout cancelled</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">No worries — you can try again anytime.</p>
      <a href="/pricing" className="btn-secondary">Back to Pricing</a>
    </div>
  )
}
