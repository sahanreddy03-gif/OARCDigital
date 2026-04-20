import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-4 rounded-md border bg-card p-6 shadow">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <p className="mt-4 text-sm">
          <Link href="/" className="text-blue-600 underline">
            Return home
          </Link>
        </p>
      </div>
    </div>
  );
}
