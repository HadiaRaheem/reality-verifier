import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('hadia.raheem@example.com')
  const [password, setPassword] = useState('password123')

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', 'Hadia Raheem')
    onLogin()
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🔬 ARVS</h1>
          <p className="text-slate-400">AI Verification System</p>
          <p className="text-slate-500 text-sm mt-1">Media Authenticity Checker</p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all mt-6 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
            <p className="text-xs text-slate-300 mb-2 font-semibold uppercase tracking-wider">Demo Credentials:</p>
            <p className="text-sm text-slate-300">Email: hadia.raheem@example.com</p>
            <p className="text-sm text-slate-300">Password: password123</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Secure AI-Powered Media Verification © 2026
          </p>
        </div>
      </div>
    </div>
  )
}