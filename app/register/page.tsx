"use client"
import { useState } from 'react'

export default function RegisterPage() {
  const [identifier, setIdentifier] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: identifier })})
    window.location.href = '/dashboard'
  }

  return (
    <div className="container-max py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create your account</h1>
      <form onSubmit={submit} className="card p-6 space-y-4">
        <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" placeholder="Email or username" type="text" value={identifier} onChange={e=>setIdentifier(e.target.value)} required />
        <button className="btn-primary w-full" disabled={loading}>{loading ? 'Creating…' : 'Sign up'}</button>
      </form>
    </div>
  )
}
