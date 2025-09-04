import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/Logo';

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  footerContent: ReactNode;
}

export default function AuthLayout({ title, description, children, footerContent }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex flex-col items-center text-center">
            <Logo />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Jyo's Career Resource Lab</h1>
        </div>
        <Card className="shadow-lg animate-in fade-in-0 zoom-in-95">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
          {footerContent && <CardFooter>{footerContent}</CardFooter>}
        </Card>
      </div>
    </main>
  );
}
