import { useState } from 'react'

export default function Settings() {
  const [showSecurityModal, setShowSecurityModal] = useState(false)

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>

      <div className="max-w-3xl space-y-6">
        {/* API Key */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="font-semibold text-white mb-3">API Key</h2>
          <p className="text-sm text-slate-400 mb-4">Use this key to integrate ARVS with your applications</p>
          <div className="flex gap-2 mb-2">
            <input
              type="password"
              value="sk_test_1234567890abcdef"
              disabled
              className="flex-1 bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2 text-sm font-mono"
            />
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Copy
            </button>
          </div>
          <p className="text-xs text-slate-500">🔒 Keep this private and never share publicly</p>
        </div>

        {/* Security */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-white mb-1">Security</h2>
              <p className="text-sm text-slate-400">Manage security settings and sessions</p>
            </div>
            <button
              onClick={() => setShowSecurityModal(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Configure
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="font-semibold text-white mb-4">Notifications</h2>
          <div className="space-y-3">
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded">
              <input type="checkbox" defaultChecked className="mr-3 w-4 h-4" />
              <span>Email notifications for verifications</span>
            </label>
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded">
              <input type="checkbox" defaultChecked className="mr-3 w-4 h-4" />
              <span>Weekly summary report</span>
            </label>
            <label className="flex items-center text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded">
              <input type="checkbox" className="mr-3 w-4 h-4" />
              <span>Security alerts</span>
            </label>
          </div>
        </div>

        {/* Backup & Export */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="font-semibold text-white mb-4">Data & Backup</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              📥 Export My Data
            </button>
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              🔄 Request Backup
            </button>
          </div>
        </div>
      </div>

      {/* Security Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Two-Factor Authentication</label>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition-colors">
                  Enable 2FA
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Active Sessions</label>
                <div className="bg-slate-700 rounded-lg p-3 text-sm text-slate-300">
                  Current Browser (Active)
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Login History</label>
                <div className="bg-slate-700 rounded-lg p-3 text-sm text-slate-400">
                  Last login: Today at 2:04 PM
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSecurityModal(false)}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}