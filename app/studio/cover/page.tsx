import { CanvasEditor } from '@/components/CanvasEditor'
import { getUser } from '@/lib/auth'

export default async function CoverStudioPage() {
  const user = await getUser()
  return (
    <div className="container-max py-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Book Cover Studio</h1>
        <p className="text-gray-600 dark:text-gray-300">Preset canvas sized for common trim sizes.</p>
      </div>
      <CanvasEditor preset="cover" watermark={!user?.isPro} />
    </div>
  )
}
