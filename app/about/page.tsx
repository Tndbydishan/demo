import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AutoEvolution\'s mission to build the fastest, most indexable webs on the planet.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">About AutoEvolution</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          We are dedicated to implementing the bleeding edge of web technology. By leveraging Next.js 
          App Router, we ensure that every byte served is optimized for both user experience and search engine crawlers.
        </p>
      </div>
      
      <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">Why Architecture Matters</h2>
        <p className="text-slate-600 mb-4">
          In the modern web, speed is currency. Our architecture minimizes Client-Side JavaScript execution 
          by utilizing React Server Components (RSC). This reduces the main-thread work, leading to faster 
          Time to Interactive (TTI) and First Contentful Paint (FCP) metrics—core Web Vitals that Google prioritizes.
        </p>
      </section>
    </div>
  );
}