export default function GlobalSpinner() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-orange-900 border-t-orange-500 rounded-full animate-spin w-12 h-12" />
    </div>
  )
}