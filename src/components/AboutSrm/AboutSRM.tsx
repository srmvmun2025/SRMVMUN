"use client"
import Image from "next/image"
import { GraduationCap, Users, Award, MapPin, BookOpen, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function AboutSRM() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-16">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <GraduationCap className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#EFDB9E" }} />
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
             ABOUT SRMIST
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: "#EFDB9E" }}>
              SRM Institute of Science and Technology
            </h2>
            
          </div>

          {/* Motto Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 animate-pulse"
            style={{ borderColor: "#800301", backgroundColor: "rgba(128, 3, 1, 0.1)" }}
          >
            <Zap className="w-5 h-5" style={{ color: "#800301" }} />
            <span className="text-lg font-semibold" style={{ color: "#EFDB9E" }}>
              Learn. Leap. Lead.
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Content */}
          <div
            className={`h-full flex flex-col gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            
            {/* Main Description */}
            <div className="p-8 bg-black/50 border border-neutral-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 rounded-xl">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Guided by the motto{" "}
                <span style={{ color: "#EFDB9E" }} className="font-semibold">
                  Learn. Leap. Lead.
                </span>
                , SRMIST is among India&apos;s most prestigious institutions of higher education. With an impressive student
                body of over{" "}
                <span style={{ color: "#800301" }} className="font-bold">
                  52,000 full time enrollees
                </span>{" "}
                and a robust faculty count exceeding{" "}
                <span style={{ color: "#800301" }} className="font-bold">
                  3,200
                </span>
                , SRM offers a wide spectrum of academic programs—from undergraduate to doctoral research—across its
                diverse campuses.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                Accredited with{" "}
                <span style={{ color: "#EFDB9E" }} className="font-bold">
                  NAAC&apos;s elite A++ grade
                </span>
                , SRMIST exemplifies academic excellence and innovation.
              </p>
            </div>

            {/* Small stats placed below the text (left column) */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Students", value: "52,000+", icon: Users },
                { label: "Faculty", value: "3,200+", icon: BookOpen },
                { label: "Programs", value: "UG to PhD", icon: GraduationCap },
                { label: "Grade", value: "NAAC A++", icon: Award },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-neutral-800 bg-black/40 p-3 text-center"
                >
                  <stat.icon
                    className="mx-auto mb-1 h-5 w-5"
                    style={{ color: index % 2 === 0 ? "#EFDB9E" : "#800301" }}
                  />
                  <div className="text-sm font-semibold" style={{ color: "#EFDB9E" }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Campus Info */}
            <div className="p-6 bg-gradient-to-r from-black/25 to-black/10 border border-neutral-800 backdrop-blur-sm hover:scale-105 transition-all duration-300 rounded-xl">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: "#800301" }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#EFDB9E" }}>
                    SRM Vadapalani Campus
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Nestled in the heart of Chennai, spans a sprawling, well-connected expanse. Designed with a
                    corporate ambience, it provides fully air-conditioned classrooms, LCD equipped teaching aids, and a
                    digitally optimized learning environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div
            className={`h-full transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="h-full p-8 bg-gradient-to-br from-black/40 to-black/20 border-2 hover:border-opacity-100 transition-all duration-300 rounded-xl"
              style={{ borderColor: "#EFDB9E" }}
            >
              <div className="relative h-full min-h-[320px] md:min-h-[420px] rounded-lg overflow-hidden group">
                <Image
                  src="/srm-vdp.jpg"
                  alt="SRM Vadapalani Campus"
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats removed; now shown under text */}
      </div>
    </div>
  )
}
