import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="#" className="flex items-center font-bold" prefetch={false}>
            <Briefcase className="h-6 w-6 mr-2" />
            <span>Jyo's Career Resource Lab</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/login" prefetch={false}>
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/register" prefetch={false}>
                Sign Up
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Dream Career
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Jyo's Career Resource Lab provides you with the tools and resources you need to succeed in your professional journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/register" prefetch={false}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/600/400"
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint="career development"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of features to help you at every stage of your career.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <Briefcase className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Career Coaching</h3>
                  <p className="text-muted-foreground">Personalized guidance from industry experts to help you navigate your career path.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Skill Building</h3>
                  <p className="text-muted-foreground">Access a library of courses and workshops to develop in-demand skills.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">Connect with a network of peers and mentors for support and opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Jyo's Career Resource Lab. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
