export type WorkflowTemplate = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  cliCommand: string;
  aiPrompt: string;
};

export const workflowTemplates: WorkflowTemplate[] = [
  {
    id: '1',
    title: 'Customer Feedback Loop',
    description: 'A workflow to collect customer feedback via a form and automatically categorize it using AI.',
    tags: ['AI', 'Customer Support'],
    cliCommand: 'postpipe template import customer-feedback',
    aiPrompt: `Generate a React frontend for a customer feedback system. It should include a form with fields for 'Name' (text), 'Email' (email), 'Rating' (1-5 stars), and 'Feedback' (textarea). On submission, it should display a "Thank you" message. Use Tailwind CSS for styling and ensure it is responsive. The form should submit its data to an API endpoint at '/api/feedback'.`,
  },
  {
    id: '2',
    title: 'New User Onboarding',
    description: 'Send a series of welcome emails to new users who sign up through a specific form.',
    tags: ['Email', 'Marketing'],
    cliCommand: 'postpipe template import user-onboarding',
    aiPrompt: `Create a landing page with a user signup form. The form should have 'Email' and 'Password' fields. Use a modern, clean design with a prominent call-to-action button. When a user signs up, call the '/api/signup' endpoint. Display success or error messages returned from the API.`,
  },
  {
    id: '3',
    title: 'Content Approval Workflow',
    description: 'A multi-step process for drafting, reviewing, and publishing blog posts.',
    tags: ['Content', 'Collaboration'],
    cliCommand: 'postpipe template import content-approval',
    aiPrompt: `Build a frontend for a content management system. The main view should be a Kanban board with columns: 'Draft', 'In Review', 'Approved'. Cards on the board represent articles. Allow dragging cards between columns. This is a frontend-only prototype, so state changes don't need to persist.`,
  },
  {
    id: '4',
    title: 'E-commerce Order Processing',
    description: 'Automate order fulfillment, from payment confirmation to shipping notification.',
    tags: ['E-commerce', 'Automation'],
    cliCommand: 'postpipe template import order-processing',
    aiPrompt: `Generate the UI for an e-commerce checkout page. It should include sections for shipping information, billing information (can be same as shipping), and payment details (mock credit card form). Calculate and display the order summary with subtotal, tax, and total. The final "Place Order" button should be prominent.`,
  },
];

export type FormSubmission = {
  id: string;
  submittedAt: string;
  data: Record<string, any>;
};

export const formSubmissions: FormSubmission[] = [
    {
        id: 'sub1',
        submittedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        data: { name: 'Alice Johnson', email: 'alice@example.com', message: 'Great product!' }
    },
    {
        id: 'sub2',
        submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        data: { name: 'Bob Williams', email: 'bob@example.com', rating: '5', comments: 'Loved the new feature.' }
    },
    {
        id: 'sub3',
        submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        data: { email: 'charlie@example.com', subscribed: true }
    },
    {
        id: 'sub4',
        submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        data: { name: 'Diana Miller', email: 'diana@example.com', issue: 'Login problem', details: 'Cannot reset my password.' }
    }
];
