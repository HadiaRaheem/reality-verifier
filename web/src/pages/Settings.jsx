export default function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

      <div className="max-w-2xl">
        {/* Dark Mode Setting */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
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
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">API Key</h2>
          <input
            type="password"
            value="sk_test_51234567890"
            disabled
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 mb-3"
          />
          <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded transition-colors">
            Copy API Key
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
          <label className="flex items-center mb-3">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span className="text-gray-900 dark:text-white">Email notifications for verifications</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-3" />
            <span className="text-gray-900 dark:text-white">Weekly summary report</span>
          </label>
        </div>
      </div>
    </div>
  )
}