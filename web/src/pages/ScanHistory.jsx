import { useState } from 'react'

export default function ScanHistory() {
  const [scans] = useState([
    {
      id: 1,
      filename: 'viral_protest_video.mp4',
      type: '🎬 Video',
      date: 'Jun 10, 2:34 PM',
      size: '245 MB',
      status: 'AI-Generated',
      statusBg: 'bg-red-500/20',
      statusText: 'text-red-400',
      confidence: 98
    },
    {
      id: 2,
      filename: 'news_screenshot_07.png',
      type: '📸 Image',
      date: 'Jun 10, 1:15 PM',
      size: '1.2 MB',
      status: 'Manipulated',
      statusBg: 'bg-orange-500/20',
      statusText: 'text-orange-400',
      confidence: 74
    },
    {
      id: 3,
      filename: 'press_release_final.jpg',
      type: '📷 Image',
      date: 'Jun 10, 12:47 PM',
      size: '3.5 MB',
      status: 'Authentic',
      statusBg: 'bg-green-500/20',
      statusText: 'text-green-400',
      confidence: 12
    },
    {
      id: 4,
      filename: 'deepfake_interview.mp4',
      type: '🎬 Video',
      date: 'Jun 9, 11:23 AM',
      size: '512 MB',
      status: 'AI-Generated',
      statusBg: 'bg-red-500/20',
      statusText: 'text-red-400',
      confidence: 96
    },
    {
      id: 5,
      filename: 'edited_headline_crop.png',
      type: '📸 Image',
      date: 'Jun 9, 9:45 AM',
      size: '0.8 MB',
      status: 'Manipulated',
      statusBg: 'bg-orange-500/20',
      statusText: 'text-orange-400',
      confidence: 61
    },
  ])

  return (
    <div>
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-700">
        <h1 className="text-4xl font-bold text-white mb-2">Scan History</h1>
        <p className="text-slate-400">View all your media verification records</p>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-3 mb-6 pb-6 border-b border-slate-700">
        <button className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-sm font-medium hover:bg-purple-500/30 transition-all">
          All Files
        </button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all">
          Images
        </button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all">
          Videos
        </button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all">
          Authentic
        </button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all">
          Manipulated
        </button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all">
          AI-Generated
        </button>
      </div>

      {/* Scans Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-700/50 border-b border-slate-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">File Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Date Scanned</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Size</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">Confidence</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-slate-300 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {scans.map((scan) => (
              <tr key={scan.id} className="hover:bg-slate-700/30 transition-all">
                <td className="px-6 py-4 text-white font-medium truncate">{scan.filename}</td>
                <td className="px-6 py-4 text-slate-400 text-sm">{scan.type}</td>
                <td className="px-6 py-4 text-slate-400 text-sm">{scan.date}</td>
                <td className="px-6 py-4 text-slate-400 text-sm">{scan.size}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-semibold ${scan.statusBg} ${scan.statusText}`}>
                    {scan.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-white font-bold">{scan.confidence}%</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-all">← Previous</button>
        <button className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg text-sm">1</button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-all">2</button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-all">3</button>
        <button className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600 transition-all">Next →</button>
      </div>
    </div>
  )
}