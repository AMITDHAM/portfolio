import Link from "next/link";

export default function ResumeSnippet() {
    return (
      <section className="py-12 bg-offwhite text-body mobile:py-16" id="resume">
        <div className="container px-4 mobile:px-8">
          <h2 className="text-3xl font-bold mb-6">Resume</h2>
          <embed src="/resume.pdf" type="application/pdf" width="100%" height="400px" className="rounded mb-4" />
          <Link href="/resume.pdf" download className="inline-block bg-primary px-6 py-3 rounded-md text-light font-semibold hover:bg-primarydark transition-all">
            Download Resume
          </Link>
        </div>
      </section>
    );
  }
  