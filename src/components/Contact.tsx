'use client'

const Contact = () => {
  return (
    <section className="py-24 bg-[var(--background-500)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--background-800)]/50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--background-700)]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--background-600)]/20 blur-3xl" />
        
        {/* Animated floating orbs */}
        <div className="animate-float absolute top-20 left-[20%] w-16 h-16 rounded-full bg-[var(--background-500)]/10" />
        <div className="animate-float-delayed absolute bottom-20 right-[20%] w-24 h-24 rounded-full bg-[var(--background-400)]/10" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(var(--background-700) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.1
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--primary-200)] mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-[var(--primary-300)]">
            Let's discuss how we can help secure your AI applications
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-300)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[var(--background-800)]/50 border border-[var(--background-700)] rounded-xl text-[var(--primary-200)] placeholder-[var(--primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--background-500)] transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--primary-300)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[var(--background-800)]/50 border border-[var(--background-700)] rounded-xl text-[var(--primary-200)] placeholder-[var(--primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--background-500)] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--primary-300)] mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-[var(--background-800)]/50 border border-[var(--background-700)] rounded-xl text-[var(--primary-200)] placeholder-[var(--primary-400)] focus:outline-none focus:ring-2 focus:ring-[var(--background-500)] transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-[var(--background-500)] to-[var(--background-400)] text-[var(--primary-200)] font-semibold rounded-xl hover:from-[var(--background-400)] hover:to-[var(--background-300)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--background-500)] focus:ring-offset-2 focus:ring-offset-[var(--background-900)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default Contact
