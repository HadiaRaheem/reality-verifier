import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function Reports() {
  const detectionDimensions = [
    { category: 'Pixel Analysis', value: 92 },
    { category: 'Metadata', value: 87 },
    { category: 'AI Patterns', value: 95 },
    { category: 'Facial Features', value: 88 },
    { category: 'Compression', value: 91 },
    { category: 'Location Match', value: 84 },
  ]

  const monthlyData = [
    { month: 'January', authentic: 120, manipulated: 40, aiGen: 15 },
    { month: 'February', authentic: 145, manipulated: 55, aiGen: 20 },
    { month: 'March', authentic: 165, manipulated: 62, aiGen: 28 },
    { month: 'April', authentic: 190, manipulated: 75, aiGen: 32 },
    { month: 'May', authentic: 210, manipulated: 88, aiGen: 45 },
    { month: 'June', authentic: 1891, manipulated: 754, aiGen: 655 },
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-700">
        <h1 className="text-4xl font-bold text-white">Reports</h1>
        <p className="text-slate-400 mt-1">Comprehensive verification reports and summaries</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-lg p-5">
          <p className="text-green-400 text-xs uppercase tracking-wider font-semibold mb-2">Authentic Media</p>
          <p className="text-white text-3xl font-bold">1,891</p>
          <p className="text-green-400 text-xs mt-2">66.4% success rate</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-lg p-5">
          <p className="text-orange-400 text-xs uppercase tracking-wider font-semibold mb-2">Manipulated Content</p>
          <p className="text-white text-3xl font-bold">754</p>
          <p className="text-orange-400 text-xs mt-2">26.5% detected</p>
        </div>

        <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-lg p-5">
          <p className="text-red-400 text-xs uppercase tracking-wider font-semibold mb-2">AI-Generated</p>
          <p className="text-white text-3xl font-bold">655</p>
          <p className="text-red-400 text-xs mt-2">23.0% flagged</p>
        </div>
      </div>

      {/* Detection Radar */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Detection Dimensions Radar</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={detectionDimensions}>
            <PolarGrid stroke="#475569" />
            <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
            <PolarRadiusAxis stroke="#94a3b8" />
            <Radar name="Confidence %" dataKey="value" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.5} />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
          </RadarChart>
        </ResponsiveContainer>
        <p className="text-slate-400 text-sm text-center mt-4">Shows detection confidence across different analysis methods</p>
      </div>

      {/* Monthly Trends */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Monthly Verification Trends</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
              labelStyle={{ color: '#f1f5f9' }}
            />
            <Bar dataKey="authentic" fill="#10b981" radius={[8, 8, 0, 0]} />
            <Bar dataKey="manipulated" fill="#f97316" radius={[8, 8, 0, 0]} />
            <Bar dataKey="aiGen" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Findings */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Findings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Most Common Manipulation Type</span>
              <span className="text-sm font-bold text-orange-400">Pixel Editing</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Fastest Growing Threat</span>
              <span className="text-sm font-bold text-red-400">GAN-Generated</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Highest Accuracy Score</span>
              <span className="text-sm font-bold text-green-400">97.5%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-300">Average Response Time</span>
              <span className="text-sm font-bold text-cyan-400">2.4 seconds</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="text-sm font-medium text-white">Increase GAN Detection</p>
                <p className="text-xs text-slate-400">Rising AI-generated content trend</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
              <span className="text-lg">✓</span>
              <div>
                <p className="text-sm font-medium text-white">Maintain Pixel Analysis</p>
                <p className="text-xs text-slate-400">Best performing detection method</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
              <span className="text-lg">📊</span>
              <div>
                <p className="text-sm font-medium text-white">Expand Location Checking</p>
                <p className="text-xs text-slate-400">Moderate performance improvement potential</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
              <span className="text-lg">🔄</span>
              <div>
                <p className="text-sm font-medium text-white">Update ML Models</p>
                <p className="text-xs text-slate-400">Monthly model retraining recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}