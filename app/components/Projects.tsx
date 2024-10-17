import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-12 bg-lightgrey text-body mobile:py-16" id="projects">
      <div className="container px-4 mobile:px-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-8">
          <div className="bg-light p-4 rounded shadow">
            <Image src="/project1.jpg" alt="Project 1" width={300} height={200} className="rounded" />
            <h3 className="text-xl font-semibold mt-4">Project One</h3>
            <p className="text-sm mt-2">A brief description of the project.</p>
            <Link href="https://project1.com" className="text-primary mt-3 inline-block hover:underline">Visit Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
