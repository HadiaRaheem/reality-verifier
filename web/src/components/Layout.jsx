import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}