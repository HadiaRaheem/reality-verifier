import { useState } from 'react'

export default function Settings({ darkMode, toggleDarkMode }) {
  const [showSecurityModal, setShowSecurityModal] = useState(false)

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

      <div className="max-w-2xl space-y-6">
        {/* Dark Mode */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-1">Dark Mode</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Toggle between light and dark theme</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        {/* API Key */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">API Key</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Use this key to integrate Reality Check with your applications</p>
          <div className="flex gap-2">
            <input
              type="password"
              value="sk_test_1234567890abcdef"
              disabled
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm font-mono"
            />
            <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Copy
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">🔒 Keep this private and never share publicly</p>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-1">Security</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Manage security settings and sessions</p>
            </div>
            <button
              onClick={() => setShowSecurityModal(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Configure
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-900 dark:text-white">Email notifications for verifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-900 dark:text-white">Weekly summary report</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-900 dark:text-white">Security alerts</span>
            </label>
          </div>
        </div>

        {/* Backup & Export */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Data & Backup</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              📥 Export My Data
            </button>
            <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              🔄 Request Backup
            </button>
          </div>
        </div>
      </div>

      {/* Security Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Settings</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Two-Factor Authentication</label>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-colors">
                  Enable 2FA
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Active Sessions</label>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm text-gray-900 dark:text-white">
                  Current Browser (Active)
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Login History</label>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm text-gray-600 dark:text-gray-400">
                  Last login: Today at 2:04 PM
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSecurityModal(false)}
              className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}