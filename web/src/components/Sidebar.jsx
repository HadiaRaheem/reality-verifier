import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/' },
    { icon: '👤', label: 'Account', path: '/account' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
  ]

  return (
    <div className="bg-gradient-to-b from-emerald-500 via-emerald-600 to-teal-700 text-white w-56 min-h-screen p-5 flex flex-col rounded-r-3xl shadow-xl">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
          🔬 Reality Check
        </h1>
        <p className="text-xs text-white/70 mt-1">Media Verification AI</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              location.pathname === item.path
                ? 'bg-white/30 backdrop-blur-sm shadow-lg border border-white/40'
                : 'hover:bg-white/15 hover:backdrop-blur-sm'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/20 pt-4 space-y-2">
        <p className="text-xs text-white/70 font-semibold">FYP v1.0</p>
        <p className="text-xs text-white/60">© 2026 AI Verification</p>
      </div>
    </div>
  )
}