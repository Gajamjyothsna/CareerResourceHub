import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create an Account"
      description="Enter your details to get started."
      footerContent={
        <div className="text-sm text-center w-full">
          <p>
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Log In
            </Link>
          </p>
        </div>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}
