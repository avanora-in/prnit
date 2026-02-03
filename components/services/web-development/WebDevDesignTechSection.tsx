"use client";

export default function WebDevDesignTechSection() {
  return (
    <section className="w-full py-16 md:py-24 secondary-background">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
          <div className="inline-flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="flex h-[14px] w-[28px] sm:h-[16px] sm:w-[32px] md:h-[18px] md:w-[34px] items-center rounded-full border support-blue-border">
                  <div className="mx-auto h-[8px] w-[20px] sm:h-[9px] sm:w-[24px] md:h-[10px] md:w-[26px] rounded-full support-blue-background" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-8 primary-black syne-font">
                  Our Expertise
                </p>
              </div>
              <div className="h-px w-50 sm:w-60 md:w-70 primary-black-background" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold primary-black leading-normal">
              Design and <span className="red-text">Technology</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              We believe great websites are built at the intersection of stunning design and powerful technology. Our team combines creative excellence with technical expertise to deliver web solutions that not only look amazing but perform flawlessly.
            </p>

            <p className="text-sm sm:text-base md:text-lg primary-black">
              If you are looking for a reliable web design company or a development partner, we can help. Our dedicated team of developers and designers is ready to bring your vision to life with cutting-edge solutions tailored to your needs.
            </p>

            <ul className="space-y-4">
              {[
                "Pixel-perfect responsive designs",
                "SEO-optimized architecture",
                "Fast loading & high performance",
                "Secure & scalable solutions",
                "Ongoing maintenance & support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full primary-black-background" />
                  <span className="text-sm sm:text-base primary-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div>
            <div className="relative bg-gradient-to-br from-[#1F4FD8]/10 to-[#8B1E2D]/10 rounded-3xl p-8 md:p-12">
              <svg
                viewBox="0 0 400 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Main Screen */}
                <rect x="80" y="50" width="240" height="160" rx="12" fill="#1F4FD8" />
                <rect x="90" y="70" width="220" height="130" rx="6" fill="white" />
                
                {/* Screen Content - Design Elements */}
                <rect x="105" y="85" width="60" height="8" rx="2" fill="#1F4FD8" opacity="0.4" />
                <rect x="105" y="100" width="190" height="40" rx="4" fill="#E5E7EB" />
                <rect x="105" y="150" width="60" height="35" rx="4" fill="#1F4FD8" opacity="0.2" />
                <rect x="175" y="150" width="60" height="35" rx="4" fill="#8B1E2D" opacity="0.2" />
                <rect x="245" y="150" width="60" height="35" rx="4" fill="#1F4FD8" opacity="0.2" />
                
                {/* Stand */}
                <rect x="180" y="210" width="40" height="30" fill="#E5E7EB" />
                <rect x="150" y="240" width="100" height="10" rx="2" fill="#E5E7EB" />
                
                {/* Floating Code Window */}
                <rect x="20" y="120" width="80" height="100" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                <rect x="20" y="120" width="80" height="20" rx="8" fill="#1F4FD8" />
                <rect x="20" y="132" width="80" height="8" fill="#1F4FD8" />
                <circle cx="32" cy="130" r="3" fill="white" opacity="0.5" />
                <circle cx="42" cy="130" r="3" fill="white" opacity="0.5" />
                <circle cx="52" cy="130" r="3" fill="white" opacity="0.5" />
                <rect x="30" y="150" width="40" height="4" rx="1" fill="#1F4FD8" opacity="0.3" />
                <rect x="30" y="160" width="55" height="4" rx="1" fill="#8B1E2D" opacity="0.3" />
                <rect x="30" y="170" width="35" height="4" rx="1" fill="#1F4FD8" opacity="0.3" />
                <rect x="30" y="180" width="50" height="4" rx="1" fill="#1F4FD8" opacity="0.4" />
                <rect x="30" y="190" width="45" height="4" rx="1" fill="#8B1E2D" opacity="0.3" />
                <rect x="30" y="200" width="60" height="4" rx="1" fill="#1F4FD8" opacity="0.3" />
                
                {/* Floating Design Tool */}
                <rect x="300" y="100" width="80" height="100" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2" />
                <rect x="310" y="115" width="60" height="60" rx="4" fill="#E5E7EB" />
                <circle cx="340" cy="145" r="15" fill="#1F4FD8" opacity="0.3" />
                <rect x="325" y="135" width="30" height="20" rx="2" fill="#8B1E2D" opacity="0.3" />
                <rect x="310" y="185" width="60" height="6" rx="2" fill="#E5E7EB" />
                
                {/* Decorative Elements */}
                <circle cx="60" cy="80" r="15" fill="#1F4FD8" opacity="0.1" />
                <circle cx="350" cy="60" r="20" fill="#8B1E2D" opacity="0.1" />
                <rect x="40" y="270" width="25" height="25" rx="5" fill="#1F4FD8" opacity="0.1" />
                <rect x="335" y="260" width="30" height="30" rx="6" fill="#8B1E2D" opacity="0.1" />
                
                {/* Connection Lines */}
                <path d="M100 170 L80 170" stroke="#1F4FD8" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                <path d="M300 150 L320 150" stroke="#1F4FD8" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
