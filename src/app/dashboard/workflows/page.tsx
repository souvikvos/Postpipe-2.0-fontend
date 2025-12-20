import { workflowTemplates } from "@/lib/data";
import { WorkflowCard } from "@/components/dashboard/workflows/workflow-card";
import { FilterBar } from "@/components/dashboard/workflows/filter-bar";

export default function WorkflowsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Workflow Template Marketplace
        </h1>
        <p className="mt-1 text-muted-foreground">
          Browse and use templates to kickstart your next project.
        </p>
      </div>
      <FilterBar />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {workflowTemplates.map((template) => (
          <WorkflowCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
