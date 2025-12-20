import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Combine,
  Rocket,
  Palette,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

const features = [
  {
    icon: <Palette className="size-8 text-primary" />,
    title: 'Visual Form Builder',
    description: 'Create and customize static forms with ease. No coding required until you want to.',
  },
  {
    icon: <Combine className="size-8 text-primary" />,
    title: 'Workflow Templates',
    description: 'Jumpstart your projects with a marketplace of dynamic, ready-to-use workflow templates.',
  },
  {
    icon: <Rocket className="size-8 text-primary" />,
    title: 'Agentic AI',
    description: 'Use pre-formatted AI prompts to generate frontends and accelerate your development.',
  },
  {
    icon: <Code className="size-8 text-primary" />,
    title: 'Embed Anywhere',
    description: 'Generate simple HTML/JS snippets to embed your forms on any website or platform.',
  },
  {
    icon: <ShieldCheck className="size-8 text-primary" />,
    title: 'Centralized Auth',
    description: 'Secure authentication across all your PostPipe services for a seamless user experience.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">
        <section
          id="hero"
          className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-32"
        >
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
              Build & Automate with PostPipe Pro
            </h1>
            <p className="text-lg text-muted-foreground">
              From static forms to agentic AI-powered workflows, PostPipe Pro is the
              all-in-one platform for modern developers and creators.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/dashboard/workflows">
                  Get Started <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full md:h-auto md:p-8">
            {heroImage && (
               <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={800}
                  height={600}
                  className="rounded-xl object-cover shadow-2xl shadow-primary/20"
                  data-ai-hint={heroImage.imageHint}
                />
            )}
          </div>
        </section>

        <section id="features" className="bg-background-muted py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-4xl font-bold">
                Everything You Need to Build Faster
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                PostPipe Pro provides the tools to streamline your development
                process from end to end.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
