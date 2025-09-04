"use client";

import { useSearchParams } from 'next/navigation';
import AuthLayout from '@/components/auth/AuthLayout';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import Link from 'next/link';

export default function ResetPasswordView() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  return (
    <AuthLayout
      title="Reset Your Password"
      description={`Enter the OTP and your new password.`}
      footerContent={
        <div className="text-sm text-center w-full">
            <Link href="/login" className="font-medium text-primary hover:underline">
                Back to Login
            </Link>
        </div>
      }
    >
      <ResetPasswordForm email={email} />
    </AuthLayout>
  );
}
