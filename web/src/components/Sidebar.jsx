import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const mainMenu = [
    { icon: '📊', label: 'Dashboard', path: '/' },
    { icon: '📁', label: 'Scan Media', path: '/scan' },
    { icon: '🖼️', label: 'Image Analysis', path: '/image-analysis' },
    { icon: '🎬', label: 'Video Analysis', path: '/video-analysis' },
    { icon: '📰', label: 'News Checker', path: '/news-checker' },
  ]

  const reportMenu = [
    { icon: '📜', label: 'Scan History', path: '/scan-history' },
    { icon: '📈', label: 'Analytics', path: '/analytics' },
    { icon: '📋', label: 'Reports', path: '/reports' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="w-60 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen flex flex-col border-r border-slate-700/50 p-6">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white">🔬 ARVS</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">AI Verification</p>
      </div>

      {/* Main Menu */}
      <div className="mb-8">
        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Main</p>
        <nav className="space-y-2">
          {mainMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-purple-500/20 text-purple-300 border-l-2 border-purple-500'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Reports Menu */}
      <div className="mb-8 flex-1">
        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Reports</p>
        <nav className="space-y-2">
          {reportMenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive(item.path)
                  ? 'bg-purple-500/20 text-purple-300 border-l-2 border-purple-500'
                  : 'text-slate-300 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Settings & Account */}
      <div className="border-t border-slate-700 pt-4">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all mb-3 ${
            isActive('/settings')
              ? 'bg-purple-500/20 text-purple-300 border-l-2 border-purple-500'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <span className="text-lg">⚙️</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>

        {/* User Profile Card */}
        <Link
          to="/account"
          className="block p-3 bg-purple-500/15 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
              HR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">Hadia</p>
              <p className="text-xs text-slate-400 truncate">hadia@example.com</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}