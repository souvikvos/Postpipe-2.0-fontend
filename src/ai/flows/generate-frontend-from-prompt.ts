'use server';

/**
 * @fileOverview A flow to generate frontend code from a prompt.
 *
 * - generateFrontend - A function that generates frontend code based on a given prompt.
 * - GenerateFrontendInput - The input type for the generateFrontend function.
 * - GenerateFrontendOutput - The return type for the generateFrontend function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFrontendInputSchema = z.object({
  prompt: z.string().describe('A detailed prompt for generating the frontend code.'),
});
export type GenerateFrontendInput = z.infer<typeof GenerateFrontendInputSchema>;

const GenerateFrontendOutputSchema = z.object({
  code: z.string().describe('The generated frontend code.'),
});
export type GenerateFrontendOutput = z.infer<typeof GenerateFrontendOutputSchema>;

export async function generateFrontend(input: GenerateFrontendInput): Promise<GenerateFrontendOutput> {
  return generateFrontendFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFrontendPrompt',
  input: {schema: GenerateFrontendInputSchema},
  output: {schema: GenerateFrontendOutputSchema},
  prompt: `You are an expert frontend developer. Generate clean, efficient, and well-documented frontend code based on the following prompt:\n\n{{prompt}}\n\nMake sure to return only the code. Do not include any explanations or other text.`,    
});

const generateFrontendFlow = ai.defineFlow(
  {
    name: 'generateFrontendFlow',
    inputSchema: GenerateFrontendInputSchema,
    outputSchema: GenerateFrontendOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
