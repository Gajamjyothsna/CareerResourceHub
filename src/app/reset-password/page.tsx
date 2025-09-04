import ResetPasswordView from '@/components/auth/ResetPasswordView';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function LoadingState() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="w-full max-w-sm space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-64 w-full" />
            </div>
        </div>
    )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ResetPasswordView />
    </Suspense>
  );
}
