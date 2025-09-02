import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Committee Not Found
        </h1>
        <p className="text-white/90 text-lg mb-8">
          The committee you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/committee"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Back to Committees
        </Link>
      </div>
    </div>
  );
}
