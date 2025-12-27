export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-lg text-slate-700 leading-relaxed mb-4">
        Hi, I’m <span className="font-semibold">Zainab Shujat</span> — a B.Tech CSE (AIML) student,
        an aspiring web developer, and the writer behind 
        <span className="font-semibold"> Notes From a B.Tech Brain</span>.
        I build things, write things, and try to make sense of the world around me through both.
      </p>

      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        This blog is where I explore technology, geopolitics, student life, soft skills,
        and personal growth. It started as a weekly newsletter on LinkedIn and slowly 
        grew into a space where I document my journey — the wins, the chaos, and the learning.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What I Do</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg">
        <li>Write weekly editions on tech, world events, and personal reflections</li>
        <li>Build projects with HTML, CSS, JavaScript, React, and Next.js</li>
        <li>Study Machine Learning and AI fundamentals</li>
        <li>Document life as a girl in STEM</li>
        <li>Share insights on productivity, communication, and emotional intelligence</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">My Goals</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        I want to grow as a developer, become financially independent, and build a space 
        where students like me feel seen — especially those who don’t fit neatly into 
        “college clubs” but still dream big.  
      </p>

      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        Long-term? I want to publish a book, build useful products, and create a body of 
        work I’m proud of. This site is the first step.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Portfolio</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        Curious about my work? Check out my portfolio site:
        {" "}
        <a
          href="https://zainabshujat.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          zainabshujat.vercel.app
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Let’s Connect</h2>
      <p className="text-lg text-slate-700 leading-relaxed">
        Reach out on{" "}
        <a href="https://www.linkedin.com/in/zainab-shujat-web-developer" 
           target="_blank" 
           className="underline text-purple-600 font-medium">
          LinkedIn
        </a>{" "}
        — I’d love to talk, learn, and grow together.
      </p>
    </main>
  );
}
