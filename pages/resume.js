import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume - Minh</title>
        <meta name="description" content="Minh's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-4 sm:px-10 md:px-20 lg:px-40 py-10">
        <section>
          <h1 className="text-2xl sm:text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">Resume</h1>
          <div className="w-full h-screen">
            <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
              <p className="text-gray-800 dark:text-gray-200">
                It appears your browser does not support PDFs. Please download the PDF to view it: 
                <a href="/resume.pdf" className="text-teal-600 dark:text-teal-400">Download PDF</a>.
              </p>
            </object>
          </div>
        </section>
      </main>
    </div>
  );
}
