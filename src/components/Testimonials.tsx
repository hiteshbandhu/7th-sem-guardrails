'use client'

const Testimonials = () => {
  return (
    <section className="py-24 bg-[var(--background-600)] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Top left pattern */}
        <svg className="absolute -top-20 -left-20 w-96 h-96 text-[var(--primary-300)] opacity-10" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Bottom right pattern */}
        <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-[var(--primary-400)] opacity-10" viewBox="0 0 100 100">
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 0h10v10H0z" fill="none" />
            <circle cx="5" cy="5" r="2" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>

        {/* Center pattern */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-[var(--primary-200)] opacity-5" viewBox="0 0 100 100">
          <pattern id="hexagons" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path d="M10-5.77l8.66 5v10l-8.66 5L1.34 9.23v-10L10-5.77z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#hexagons)" />
        </svg>

        <div className="animate-float absolute top-20 left-[20%] w-16 h-16 rounded-full bg-[var(--primary-300)] opacity-20" />
        <div className="animate-float-delayed absolute bottom-20 right-[20%] w-24 h-24 rounded-full bg-[var(--primary-400)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--primary-200)] mb-6">
            Real Humans* Love Our Product
          </h2>
          <p className="text-lg text-[var(--primary-300)] italic">
            *and maybe some friendly AI too, we don't discriminate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote: "I used to worry about my AI assistant going rogue and taking over the world. Now I just worry about it posting cringe on Twitter.",
              author: "Sarah Connor",
              title: "Definitely Not a Time Traveler",
              image: (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-500)] flex items-center justify-center">
                  🤖
                </div>
              )
            },
            {
              quote: "Our AI was generating dad jokes instead of financial reports. Guardrails fixed that... mostly. Now it makes dad jokes AND financial reports!",
              author: "Dave Johnson",
              title: "Chief Meme Officer",
              image: (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-500)] flex items-center justify-center">
                  🎯
                </div>
              )
            },
            {
              quote: "Saved us $1M in API costs by catching that one intern who kept asking the AI to write their dating app bio.",
              author: "Alex Rodriguez",
              title: "Head of AI Safety & Romance",
              image: (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-500)] flex items-center justify-center">
                  💝
                </div>
              )
            },
            {
              quote: "Integration was so easy, even my pet hamster could do it. And trust me, he's not the brightest bulb in the socket.",
              author: "Mr. Whiskers",
              title: "Senior Hamster Engineer",
              image: (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-700)] to-[var(--primary-500)] flex items-center justify-center">
                  🐹
                </div>
              )
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[var(--background-700)] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--primary-200)]/10"
            >
              <div className="flex items-start gap-4 mb-6">
                {testimonial.image}
                <div>
                  <p className="font-bold text-[var(--primary-200)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--primary-300)]">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-[var(--primary-200)] leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
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

export default Testimonials
