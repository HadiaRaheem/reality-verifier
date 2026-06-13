import { useState, useEffect } from 'react'

export default function Results() {
  const [isScanning, setIsScanning] = useState(true)
  const [scanProgress, setScanProgress] = useState(0)

  // Simulate scanning progress
  useEffect(() => {
    if (!isScanning) return
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setIsScanning(false)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 500)
    
    return () => clearInterval(interval)
  }, [isScanning])

  // Evidence Tag Component
  const EvidenceTag = ({ icon, label, type }) => {
    const colors = {
      safe: 'bg-green-500/20 text-green-400 border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      danger: 'bg-red-500/20 text-red-400 border-red-500/30'
    }
    
    return (
      <span className={`${colors[type]} px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-2`}>
        {icon}
        {label}
      </span>
    )
  }

  // Confidence Bar Component
  const ConfidenceBar = ({ label, score, type }) => {
    const colors = {
      high: 'bg-green-500',
      medium: 'bg-yellow-500',
      low: 'bg-red-500'
    }
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{score}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors[type]} transition-all duration-500`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Scanning State */}
      {isScanning && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 mb-6 text-center">
          <div className="mb-6">
            {/* Animated Scan Circle */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-emerald-500 rounded-full opacity-20"></div>
              <div
                className="absolute inset-0 border-4 border-transparent border-t-emerald-500 border-r-emerald-500 rounded-full animate-spin"
                style={{ animationDuration: '1.5s' }}
              ></div>
              <div className="absolute inset-4 border-2 border-emerald-500/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Analysis Running...
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Scanning for manipulation, metadata anomalies, and AI generation signs
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            {Math.round(scanProgress)}% Complete
          </p>
        </div>
      )}

      {/* Results (Show after scanning) */}
      {!isScanning && (
        <>
          {/* Results Header */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✓</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Analysis Complete
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  File: sample_image.jpg • Analyzed: Jun 10, 2026 • 2.4s
                </p>
              </div>
            </div>
          </div>

          {/* Overall Threat Level */}
          <div className="bg-white dark:bg-gray-800 border border-emerald-500/30 dark:border-emerald-500/30 rounded-xl p-6 mb-6 bg-gradient-to-br from-emerald-50 dark:from-emerald-950/20 to-transparent">
            <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
              Overall Assessment
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  87% Authentic
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  High confidence • Low risk
                </p>
              </div>
              {/* Threat Indicator Circle */}
              <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                <span className="text-3xl">🟢</span>
              </div>
            </div>
          </div>

          {/* Evidence Tags */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
            <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">
              Evidence & Indicators
            </p>
            <div className="flex flex-wrap gap-3">
              <EvidenceTag icon="🟢" label="Clean Metadata" type="safe" />
              <EvidenceTag icon="🟡" label="Minor Anomaly" type="warning" />
              <EvidenceTag icon="🟢" label="No Deepfake Detected" type="safe" />
              <EvidenceTag icon="🟢" label="Location Verified" type="safe" />
              <EvidenceTag icon="🟢" label="Timestamp Valid" type="safe" />
            </div>
          </div>

          {/* Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Metadata Analysis */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Metadata Analysis
              </h3>
              <ConfidenceBar label="EXIF Data" score={95} type="high" />
              <ConfidenceBar label="Timestamp Consistency" score={88} type="high" />
              <ConfidenceBar label="Device Information" score={62} type="medium" />
            </div>

            {/* Deepfake Detection */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Deepfake & AI Detection
              </h3>
              <ConfidenceBar label="AI Generation Patterns" score={5} type="high" />
              <ConfidenceBar label="Facial Analysis" score={92} type="high" />
              <ConfidenceBar label="Compression Artifacts" score={85} type="high" />
            </div>
          </div>

          {/* Heatmap Placeholder */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
            <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">
              Manipulation Heatmap
            </p>
            <div className="h-48 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold">
              [Heatmap Overlay - Green=Authentic, Red=Suspicious]
            </div>
          </div>

          {/* Investigation Report */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Investigation Report
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                This image appears to be authentic with high confidence (87%). Metadata is consistent with the stated capture date and device. No artificial intelligence generation patterns were detected in the image structure. A minor anomaly was found in device information fields, but this falls within normal variation for this device type. Location verification matched the GPS coordinates with known geographic data. Overall assessment: Safe to use.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                📥 Download Report
              </button>
              <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                📋 Share Results
              </button>
            </div>
          </div>

          {/* New Upload Button */}
          <div className="text-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              ⬆️ Upload Another File
            </button>
          </div>
        </>
      )}
    </div>
  )
}