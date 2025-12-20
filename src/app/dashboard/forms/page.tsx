import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormBuilder } from "@/components/dashboard/forms/form-builder";
import { SubmissionsTable } from "@/components/dashboard/forms/submissions-table";

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Static Form Studio
        </h1>
        <p className="mt-1 text-muted-foreground">
          Build, customize, and manage your web forms.
        </p>
      </div>

      <Tabs defaultValue="builder" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>
        <TabsContent value="builder">
            <FormBuilder />
        </TabsContent>
        <TabsContent value="submissions">
            <SubmissionsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
