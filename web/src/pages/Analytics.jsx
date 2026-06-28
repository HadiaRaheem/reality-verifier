import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Analytics() {
  // Data for charts
  const activityData = [
    { day: 'Mon', scans: 120, authentic: 85, manipulated: 25, aiGen: 10 },
    { day: 'Tue', scans: 150, authentic: 102, manipulated: 35, aiGen: 13 },
    { day: 'Wed', scans: 140, authentic: 98, manipulated: 30, aiGen: 12 },
    { day: 'Thu', scans: 180, authentic: 125, manipulated: 40, aiGen: 15 },
    { day: 'Fri', scans: 200, authentic: 140, manipulated: 45, aiGen: 15 },
    { day: 'Sat', scans: 130, authentic: 92, manipulated: 28, aiGen: 10 },
    { day: 'Sun', scans: 100, authentic: 70, manipulated: 20, aiGen: 10 },
  ]

  const contentTypeData = [
    { name: 'Images', value: 1450, fill: '#a78bfa' },
    { name: 'Videos', value: 890, fill: '#8b5cf6' },
    { name: 'Screenshots', value: 620, fill: '#7c3aed' },
    { name: 'Documents', value: 340, fill: '#6d28d9' },
  ]

  const verificationData = [
    { name: 'Authentic', value: 1891, fill: '#10b981' },
    { name: 'Manipulated', value: 754, fill: '#f97316' },
    { name: 'AI-Generated', value: 655, fill: '#ef4444' },
  ]

  const COLORS = ['#10b981', '#f97316', '#ef4444']

  return (
    <div>
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-700">
        <h1 className="text-4xl font-bold text-white">Analytics</h1>
        <p className="text-slate-400 mt-1">Detailed insights into your verification activity</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Total Scans</p>
          <p className="text-white text-2xl font-bold">2,847</p>
          <p className="text-green-400 text-xs mt-2">+12.4% this week</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Accuracy Rate</p>
          <p className="text-white text-2xl font-bold">94.2%</p>
          <p className="text-green-400 text-xs mt-2">+0.5% vs last month</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Authentic Content</p>
          <p className="text-white text-2xl font-bold">1,891</p>
          <p className="text-cyan-400 text-xs mt-2">66.4% of total</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Suspicious</p>
          <p className="text-white text-2xl font-bold">1,409</p>
          <p className="text-orange-400 text-xs mt-2">49.6% flagged</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Scan Activity Line Chart */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Scan Activity (Weekly)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ background: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend />
              <Line type="monotone" dataKey="scans" stroke="#a78bfa" strokeWidth={2} dot={{ fill: '#a78bfa' }} />
              <Line type="monotone" dataKey="authentic" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
              <Line type="monotone" dataKey="manipulated" stroke="#f97316" strokeWidth={2} dot={{ fill: '#f97316' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Verification Breakdown Pie Chart */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Verification Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={verificationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {verificationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Content Type Bar Chart */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Content Type Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={contentTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Bar dataKey="value" fill="#a78bfa" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detection Methods */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Detection Methods Performance</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">Pixel Forensics</span>
              <span className="text-sm font-bold text-white">92%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">Metadata Check</span>
              <span className="text-sm font-bold text-white">87%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[87%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">GAN Detector</span>
              <span className="text-sm font-bold text-white">95%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">Deepfake Model</span>
              <span className="text-sm font-bold text-white">78%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">NLP Fake News</span>
              <span className="text-sm font-bold text-white">83%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[83%] bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}