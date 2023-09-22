"use client"
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to our Authentication Website
        </h1>
        <p className="text-gray-600 mb-6">
          This authentication website is made with Next.js 13, which is the
          latest version of Next.js.
        </p>
        <div className="space-x-4">
          <Link
            href="/profile"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Go to Profile
          </Link>
       
        </div>
      </div>
    </div>
  );
}
