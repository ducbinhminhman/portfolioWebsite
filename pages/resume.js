import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume - Minh</title>
        <meta name="description" content="Minh's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 py-10">
        <section>
          <h1 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">Resume</h1>
          <embed src="/resume.pdf" type="application/pdf" width="100%" height="800px" />
        </section>
      </main>
    </div>
  );
}
