'use client';
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('../api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json'},
    });

    if (res.ok) {
      setStatus('Thank you for subscribing 😁');
      setEmail('');
    } else {
      setStatus('Oops! Something went wrong 🤐');
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-4xl text-center font-bold text-blue-800">Welcome to Our Site</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h2>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border p-2 rounded mb-4"
          required
          />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Subscribe
        </button>
        {status && <p className="mt-2 text-green-600">{status}</p>}
      </form>
    </main>
);
}