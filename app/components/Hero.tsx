import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-primary to-primarydark text-light">
      <div className="text-center px-4 mobile:px-8">
        <h1 className="text-4xl ipad:text-5xl font-bold mb-4">Hi, I'm Amit Dham</h1>
        <p className="text-lg ipad:text-xl mb-6">
          A Web Developer specialized in React, Next.js, and UI/UX Design.
        </p>
        <Link href="#projects" passHref className="inline-block bg-secondary px-6 py-3 rounded-md text-light font-semibold hover:bg-secondarydark transition-all">
            View My Work
        </Link>
      </div>
    </section>
  );
}
