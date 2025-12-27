"use client";
import { useRouter } from "next/navigation";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition ${className}`}
    >
      {/* You can use an icon here if you want */}
      ← Back
    </button>
  );
}
