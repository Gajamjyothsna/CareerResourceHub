import { BookUser } from 'lucide-react';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-md">
      <BookUser className="h-8 w-8" />
    </div>
  );
}
