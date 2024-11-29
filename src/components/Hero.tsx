import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary-100)] via-[var(--primary-300)] to-[var(--primary-500)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-[var(--neutral-500)]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-64 -right-64 bg-[var(--background-300)]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-400)]/10 rounded-full blur-[120px] animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-500)]/10 backdrop-blur-sm border border-[var(--background-500)]/20">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-blue-500)] animate-pulse"></span>
              <span className="text-[var(--background-500)] text-sm font-medium">Introducing hit.rails</span>
            </div>
            
            <div className="relative">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight animate-fade-in">
                <span className="text-white drop-shadow-lg bg-gradient-to-r from-white to-[var(--background-300)] bg-clip-text text-transparent animate-text-shimmer">
                  Stop Malicious Queries,
                </span>
                <span className="text-white block mt-4 bg-gradient-to-r from-white to-[var(--background-400)] bg-clip-text text-transparent animate-text-shimmer">
                  Save Millions
                </span>

              </h1>
              {/* Decorative Scribbles */}
              <svg className="absolute -top-8 right-10 w-20 h-20 text-[var(--background-500)] animate-float" viewBox="0 0 100 100">
                <path d="M20,50 Q40,20 60,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" className="animate-draw"/>
              </svg>
              <svg className="absolute bottom-0 left-20 w-16 h-16 text-[var(--accent-blue-500)] animate-float-delayed" viewBox="0 0 100 100">
                <path d="M30,30 Q50,60 70,30" fill="none" stroke="currentColor" strokeWidth="2" className="animate-draw"/>
              </svg>
            </div>
            
            <p className="text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in-up">
              Your AI systems need protection—on both ends. Prevent harmful input, filter unsafe output, and build trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/signup" 
                className="group px-8 py-4 bg-white text-[var(--primary-200)] rounded-xl font-semibold hover:bg-[var(--background-400)] hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-white/50 flex items-center gap-2"
              >
                Get Started for Free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/demo" 
                className="group px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-center flex items-center gap-2"
              >
                Learn How It Works
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative w-full max-w-5xl">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[var(--accent-blue-500)] via-[var(--background-400)] to-[var(--accent-green-500)] rounded-3xl blur-2xl opacity-70 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--background-600)]/20 backdrop-blur bg-[var(--primary-200)]/80">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="HitRails Dashboard Preview"
                width={1920}
                height={1080}
                className="object-cover w-full"
                priority
              />
              
              {/* Feature Cards */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--primary-100)] to-transparent pt-20 pb-8">
                <div className="container px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Real-time Protection', 'Smart Filtering', 'Trust Metrics'].map((feature, index) => (
                      <div key={index} className="bg-white/95 p-6 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--primary-500)] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-[var(--primary-400)] font-bold text-lg">{feature}</p>
                            <p className="text-[var(--neutral-500)]">Enterprise-grade security</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
