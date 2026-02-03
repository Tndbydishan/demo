import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AutoEvolution team for architectural consulting and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>
      <form className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Jane Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="jane@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
          <textarea 
            id="message" 
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}