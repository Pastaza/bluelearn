import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { ProgressSummary } from "@/components/progress-summary"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <ProgressSummary
          title="Learning progress"
          description="Track how much of the concept you’ve completed."
          completed={3}
          total={5}
          label="Lessons completed"
        />
      </div>
    </div>
  )
}
