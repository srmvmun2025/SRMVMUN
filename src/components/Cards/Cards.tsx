

import teamData from "./team-members.json"
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const { coreTeamMembers, usgMembers } = teamData;

function ProfileCard({ member, isCore = false }: { member: TeamMember; isCore?: boolean }) {
  return (
    <div className="group relative h-[340px] w-full max-w-[16rem] mx-auto [perspective:1000px] overflow-hidden rounded-3xl border-2 border-[#EFDB9E]/40 shadow-[0_0_30px_rgba(239,219,158,0.15)]">
      <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] focus-within:[transform:rotateY(180deg)] will-change-transform">
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="block h-full w-full object-cover"
            width={400}
            height={500}
          />
          <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-40 md:h-44 bg-gradient-to-t from-black/90 via-black/70 to-transparent pointer-events-none z-10"></div>


          {/* Name + Role */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <div className="mb-4">
              <h3 className="mb-1 text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                {member.name}
                <div className="h-5 w-5 rounded-full bg-[#EFDB9E] flex items-center justify-center flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </h3>
              <p className="text-white/90 font-medium">{member.role}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-3xl bg-black/80 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
          {/* Subtle background accents (no shimmer) */}
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(120% 80% at 0% 0%, rgba(239,219,158,0.10), transparent), radial-gradient(120% 80% at 100% 100%, rgba(128,3,1,0.12), transparent)" }} />

          {/* Content */}
          <div className="relative z-10 h-full p-5 flex flex-col justify-end">
            <div className="mb-2">
              <h3 className="text-lg md:text-xl font-bold text-white">{member.name}</h3>
              <p className="text-white/80 text-sm font-medium">{member.role}</p>
            </div>
            <div className="h-px w-16 mb-3 bg-gradient-to-r from-[#EFDB9E] to-transparent" />
            <p className="text-sm leading-relaxed text-gray-200">{member.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile tap to flip */}
      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          .group:active > div,
          .group:focus-within > div {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </div>
  )
}

export default function Cards() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl md:text-5xl text-[#EFDB9E] font-bold bg-gradient-to-r from-white via-gray-200  to-gray-400 bg-clip-text ">
            MUN Leadership Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet our distinguished team of diplomatic leaders and Under Secretary Generals committed to fostering
            international cooperation and excellence in Model United Nations.
          </p>
        </div>

        {/* Core Team Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-center text-2xl md:text-3xl font-bold text-[#EFDB9E]">Core Leadership Team</h2>
          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {coreTeamMembers.map((member) => (
              <ProfileCard key={member.name} member={member} isCore={true} />
            ))}
          </div>
        </div>

        {/* USG Section */}
        <div>
          <h2 className="mb-12 text-center text-2xl md:text-3xl font-bold text-[#EFDB9E]">Under Secretary Generals</h2>
          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {usgMembers.map((member) => (
              <ProfileCard key={member.name} member={member} isCore={false} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-500">Join our mission to create future diplomatic leaders and global citizens.</p>
        </div>
      </div>
    </div>
  )
}