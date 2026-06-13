import { useState } from 'react'

export default function Account({ onLogout }) {
  const userName = localStorage.getItem('userName') || 'Hadia Raheem'
  const userEmail = localStorage.getItem('userEmail') || 'hadia.raheem@example.com'
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    onLogout()
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-700">
        <h1 className="text-4xl font-bold text-white">Account</h1>
        <p className="text-slate-400 mt-1">Manage your profile and account settings</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Profile Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userName.charAt(0)}{userName.split(' ')[1]?.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{userName}</h2>
              <p className="text-slate-400">{userEmail}</p>
              <p className="text-sm text-green-400 mt-2">✓ Verified User</p>
            </div>
          </div>
        </div>

        {/* Login Information */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Login Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Email Address</label>
              <input
                type="email"
                value={userEmail}
                disabled
                className="w-full bg-slate-700 text-slate-300 border border-slate-600 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Password</label>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Profile</h2>
          <div className="space-y-3">
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded transition-colors">
              <input type="checkbox" defaultChecked className="mr-3 w-4 h-4 accent-purple-500" />
              <span>Make profile public</span>
            </label>
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded transition-colors">
              <input type="checkbox" defaultChecked className="mr-3 w-4 h-4 accent-purple-500" />
              <span>Show verification history</span>
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Privacy & Security</h2>
          <div className="space-y-3 mb-4">
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded transition-colors">
              <input type="checkbox" defaultChecked className="mr-3 w-4 h-4 accent-purple-500" />
              <span>Data collection for improvement</span>
            </label>
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded transition-colors">
              <input type="checkbox" className="mr-3 w-4 h-4 accent-purple-500" />
              <span>Share analytics with team</span>
            </label>
          </div>
          <button
            onClick={() => setShowPrivacy(!showPrivacy)}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            View Privacy Policy →
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}