import React from "react";
import { getCommitteeById } from "@/data/committees";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface DetailsProps {
  committeeId: string;
}

export default function Details({ committeeId }: DetailsProps) {
  const committee = getCommitteeById(committeeId);
  
  if (!committee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black flex justify-center py-12 px-4">
      <div className="max-w-5xl w-full px-6 py-12 text-yellow-300 bg-black">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/committee"
            className="inline-flex items-center text-yellow-300 hover:text-yellow-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Committees
          </Link>
        </div>

        <h1
          className="text-center text-3xl text-transform: uppercase font-bold mb-8 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent animate-shimmer"
        >
          {committee.fullName}
        </h1>

        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-48">
            <Image
              src={committee.img}
              alt={`SRMVMUN ${committee.name} Logo`}
              fill
              className="object-contain"
              sizes="192px"
            />
          </div>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 text-transform: uppercase text-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent animate-shimmer"
          >
            About {committee.name}
          </h2>
          <div className="leading-relaxed text-white/90 mb-4 text-center">
            {committee.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent animate-shimmer text-transform: uppercase"
          >
            Agenda
          </h2>
          <p className="leading-relaxed text-white/90 text-center">
            {committee.agenda}
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-12 text-center bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent text-transform: uppercase animate-shimmer"
          >
            The Executive Board
          </h2>
          <div className="flex flex-wrap justify-center text-center text-yellow-300 text-sm">
            {committee.chairpersons.map(({ name, role, imgSrc }) => (
              <div key={name} className="flex flex-col items-center mx-12 mb-12">
                <div className="relative w-56 h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imgSrc}
                    alt={`${name} Image`}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                  {/* Black transition overlay with name and role */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-4 px-3">
                    <div className="text-center">
                      <div className="text-yellow-300 font-semibold text-sm mb-1">{name}</div>
                      <div className="text-yellow-200 text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}