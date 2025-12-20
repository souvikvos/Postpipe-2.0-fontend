'use server';

/**
 * @fileOverview A flow to suggest workflow templates based on a user description.
 *
 * - suggestWorkflowTemplates - A function that suggests workflow templates.
 * - SuggestWorkflowTemplatesInput - The input type for the suggestWorkflowTemplates function.
 * - SuggestWorkflowTemplatesOutput - The return type for the suggestWorkflowTemplates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWorkflowTemplatesInputSchema = z.object({
  description: z.string().describe('A description of the desired workflow.'),
});
export type SuggestWorkflowTemplatesInput = z.infer<
  typeof SuggestWorkflowTemplatesInputSchema
>;

const SuggestWorkflowTemplatesOutputSchema = z.object({
  templates: z
    .array(z.string())
    .describe(
      'A list of suggested workflow template names that match the description.'
    ),
});
export type SuggestWorkflowTemplatesOutput = z.infer<
  typeof SuggestWorkflowTemplatesOutputSchema
>;

export async function suggestWorkflowTemplates(
  input: SuggestWorkflowTemplatesInput
): Promise<SuggestWorkflowTemplatesOutput> {
  return suggestWorkflowTemplatesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestWorkflowTemplatesPrompt',
  input: {schema: SuggestWorkflowTemplatesInputSchema},
  output: {schema: SuggestWorkflowTemplatesOutputSchema},
  prompt: `You are an expert workflow template suggestion engine. Given a
description of a desired workflow, you will return a list of template names
that match the description.

Description: {{{description}}}

Templates:`, // Handlebars syntax used
});

const suggestWorkflowTemplatesFlow = ai.defineFlow(
  {
    name: 'suggestWorkflowTemplatesFlow',
    inputSchema: SuggestWorkflowTemplatesInputSchema,
    outputSchema: SuggestWorkflowTemplatesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
