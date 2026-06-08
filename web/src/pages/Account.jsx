export default function Account() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Account</h1>

      <div className="max-w-2xl">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
              HR
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hadia Raheem</h2>
              <p className="text-gray-600 dark:text-gray-400">hadia.raheem@example.com</p>
            </div>
          </div>
        </div>

        {/* Login Info */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Login Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value="hadia.raheem@example.com"
                disabled
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Password</label>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Subscription</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Plan: <strong>Free Tier</strong></p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition-colors">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  )
}