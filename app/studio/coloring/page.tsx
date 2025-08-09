import { CanvasEditor } from '@/components/CanvasEditor'
import { getUser } from '@/lib/auth'

export default async function ColoringStudioPage() {
  const user = await getUser()
  return (
    <div className="container-max py-12 space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Coloring Book Studio</h1>
        <p className="text-gray-600 dark:text-gray-300">Create clean outlines and patterns for coloring pages.</p>
      </div>
      <CanvasEditor preset="coloring" watermark={!user?.isPro} />
    </div>
  )
}
