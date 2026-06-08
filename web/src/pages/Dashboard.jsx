export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Welcome! Upload and verify media authenticity.</p>

      {/* Upload Card */}
      <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center cursor-pointer hover:border-emerald-500 transition-colors mb-8">
        <div className="text-5xl mb-4">⬆️</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Drag & drop your file</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">or click to select</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Supports: JPG, PNG, MP4, screenshots</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: '🔍', title: 'Manipulation Detection', desc: 'Detects edited & AI-generated regions' },
          { icon: '📋', title: 'Metadata Analysis', desc: 'Checks timestamps & device info' },
          { icon: '📍', title: 'Location Verification', desc: 'Matches GPS with geography data' },
          { icon: '🌤️', title: 'Weather Matching', desc: 'Validates weather conditions' },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Verifications Today</p>
          <p className="text-3xl font-bold text-emerald-600">1,247</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Accuracy Rate</p>
          <p className="text-3xl font-bold text-emerald-600">94.2%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Media Analyzed</p>
          <p className="text-3xl font-bold text-emerald-600">18,349</p>
        </div>
      </div>
    </div>
  )
}