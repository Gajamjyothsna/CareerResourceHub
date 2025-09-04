import AuthLayout from '@/components/auth/AuthLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password?"
      description="No worries, we'll send you reset instructions."
      footerContent={
        <div className="text-sm text-center w-full">
            <Link href="/login" className="font-medium text-primary hover:underline">
                Back to Login
            </Link>
        </div>
      }
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
