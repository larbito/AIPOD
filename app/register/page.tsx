"use client"
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email })})
    window.location.href = '/dashboard'
  }

  return (
    <div className="container-max py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create your account</h1>
      <form onSubmit={submit} className="card p-6 space-y-4">
        <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" placeholder="you@example.com" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <button className="btn-primary w-full" disabled={loading}>{loading ? 'Creating…' : 'Sign up'}</button>
      </form>
    </div>
  )
}
