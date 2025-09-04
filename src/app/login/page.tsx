import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Log in to continue to your dashboard."
      footerContent={
        <div className="text-sm text-center w-full">
          <p>
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}
