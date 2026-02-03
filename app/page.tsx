import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to AutoEvolution. Discover our SEO-friendly, high-performance web architecture solutions.',
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          Next.js App Router Architecture
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          A demonstration of modern Server-Side Rendering (SSR), Static Site Generation (SSG), and semantic SEO optimization.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Server-First" 
          description="Content is rendered on the server, ensuring search engines can index your page immediately." 
        />
        <FeatureCard 
          title="Clean Routing" 
          description="File-system based routing creates clean, human-readable URLs without configuration." 
        />
        <FeatureCard 
          title="Metadata API" 
          description="Dynamic, type-safe control over <head> tags for superior search engine visibility." 
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}