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
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Account</h1>

      <div className="max-w-2xl space-y-6">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userName.charAt(0)}{userName.split(' ')[1]?.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{userName}</h2>
              <p className="text-gray-600 dark:text-gray-400">{userEmail}</p>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">✓ Verified User</p>
            </div>
          </div>
        </div>

        {/* Login Details */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Login Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                value={userEmail}
                disabled
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Password</label>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Profile</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-900 dark:text-white">Make profile public</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-900 dark:text-white">Show verification history</span>
            </label>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Privacy & Security</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-900 dark:text-white">Data collection for improvement</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-900 dark:text-white">Share analytics with team</span>
            </label>
            <button 
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm mt-3"
            >
              View Privacy Policy →
            </button>
          </div>
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