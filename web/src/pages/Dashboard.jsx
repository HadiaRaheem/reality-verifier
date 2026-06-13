import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [recentScans] = useState([
    {
      id: 1,
      filename: 'viral_protest_video.mp4',
      type: 'video',
      icon: '🎬',
      date: 'Jun 10, 2:34 PM',
      status: 'AI-Generated',
      statusColor: 'bg-purple-500/20 text-purple-300',
      confidence: 98,
      borderColor: 'border-l-4 border-red-500'
    },
    {
      id: 2,
      filename: 'news_screenshot_07.png',
      type: 'image',
      icon: '📸',
      date: 'Jun 10, 1:15 PM',
      status: 'Manipulated',
      statusColor: 'bg-orange-500/20 text-orange-300',
      confidence: 74,
      borderColor: 'border-l-4 border-orange-500'
    },
    {
      id: 3,
      filename: 'press_release_final.jpg',
      type: 'image',
      icon: '📷',
      date: 'Jun 10, 12:47 PM',
      status: 'Authentic',
      statusColor: 'bg-green-500/20 text-green-300',
      confidence: 12,
      borderColor: 'border-l-4 border-green-500'
    },
    {
      id: 4,
      filename: 'deepfake_interview.mp4',
      type: 'video',
      icon: '🎬',
      date: 'Jun 9, 11:23 AM',
      status: 'AI-Generated',
      statusColor: 'bg-purple-500/20 text-purple-300',
      confidence: 96,
      borderColor: 'border-l-4 border-red-500'
    },
    {
      id: 5,
      filename: 'edited_headline_crop.png',
      type: 'image',
      icon: '📸',
      date: 'Jun 9, 9:45 AM',
      status: 'Manipulated',
      statusColor: 'bg-orange-500/20 text-orange-300',
      confidence: 61,
      borderColor: 'border-l-4 border-orange-500'
    },
  ])

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-700">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1">Welcome back, Hadia • Ready to verify</p>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
          ⬆️ Upload Media
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-dashed border-purple-500/30 rounded-xl p-12 text-center mb-8 cursor-pointer hover:border-purple-500/50 transition-all">
        <div className="text-5xl mb-4">📤</div>
        <h2 className="text-2xl font-semibold text-white mb-2">Drag & drop your file</h2>
        <p className="text-slate-300 mb-3">or click to browse (JPG, PNG, MP4, screenshots)</p>
        <p className="text-slate-500 text-sm">Max 100MB • Supported formats: Images, Videos, Documents</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">This Week</p>
          <p className="text-white text-2xl font-bold">24</p>
          <p className="text-green-400 text-xs mt-2">+12% from last week</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Accuracy</p>
          <p className="text-white text-2xl font-bold">94.2%</p>
          <p className="text-green-400 text-xs mt-2">+0.5% vs last month</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Authentic</p>
          <p className="text-white text-2xl font-bold">1,891</p>
          <p className="text-cyan-400 text-xs mt-2">66.4% of total</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">AI-Generated</p>
          <p className="text-white text-2xl font-bold">634</p>
          <p className="text-orange-400 text-xs mt-2">-8.2% this week</p>
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Scans</h3>
          <Link to="/scan-history" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            View All →
          </Link>
        </div>

        <div className="space-y-3">
          {recentScans.map((scan) => (
            <div
              key={scan.id}
              className={`flex items-center justify-between p-4 bg-slate-700/50 rounded-lg ${scan.borderColor} hover:bg-slate-700 transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl">{scan.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate group-hover:text-purple-300 transition-colors">
                    {scan.filename}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{scan.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-md text-xs font-semibold ${scan.statusColor}`}>
                  {scan.status}
                </span>
                <span className="text-white font-bold text-sm w-12 text-right">{scan.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}