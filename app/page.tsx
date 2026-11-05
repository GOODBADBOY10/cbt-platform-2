/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PublicHeader } from "@/app/components/PublicHeader";
import { HeroSlideshow } from "@/app/components/HeroSlideshow";
import { HistorySection } from "@/app/components/HistorySection";
import { SCHOOL } from "@/lib/school";

export default async function HomePage() {
  const session = await auth();
  const role = session?.user?.role;

  if (role === "admin" || role === "super_admin") redirect("/admin");
  if (role === "teacher") redirect("/teacher");
  if (role === "student") redirect("/student");

  const { director, anthem } = SCHOOL;

  const missionVision = [
    { title: "Our Vision", text: SCHOOL.vision },
    { title: "Our Mission", text: SCHOOL.mission },
  ].filter((item) => item.text);

  const gallery = Array.from({ length: SCHOOL.galleryCount }, (_, i) => i + 1);

  const contactItems = [
    { label: "Address", value: SCHOOL.address },
    { label: "Phone", value: SCHOOL.phone },
    { label: "Email", value: SCHOOL.email },
  ].filter((item) => item.value);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PublicHeader />

      {/* HERO */}
      <HeroSlideshow images={SCHOOL.heroImages} interval={3000}>
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <img
            src={SCHOOL.logo}
            alt={`${SCHOOL.name} logo`}
            className="w-24 h-24 mx-auto mb-6 rounded-full object-cover bg-white/10 border-2 border-white/40"
          />
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3 uppercase">
            {SCHOOL.name}
          </h1>
          <p className="text-white/90 text-lg mb-1">{SCHOOL.address}</p>
          {SCHOOL.motto && (
            <p className="mt-6 text-white/90 italic text-xl">&ldquo;{SCHOOL.motto}&rdquo;</p>
          )}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={SCHOOL.history.intro ? "#history" : "#gallery"}
              className="bg-white text-blue-800 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
            <a
              href="/login"
              className="border border-white/70 px-6 py-2.5 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              CBT Portal Login
            </a>
          </div>
        </div>
      </HeroSlideshow>

      {/* HISTORY (hides itself if empty) */}
      <HistorySection />

      {/* MISSION & VISION */}
      {missionVision.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div
            className={`max-w-4xl mx-auto px-6 grid gap-8 ${
              missionVision.length > 1 ? "sm:grid-cols-2" : ""
            }`}
          >
            {missionVision.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DIRECTOR'S MESSAGE */}
      {director.speech && (
        <section id="director" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {director.title ? `A Message From Our ${director.title}` : "A Message From Our Leadership"}
          </h2>
          <div className="grid sm:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="flex flex-col items-center sm:items-start">
              <img
                src={director.photo}
                alt={director.name}
                className="w-64 sm:w-full aspect-3/4 rounded-xl object-cover object-top border-2 border-gray-200 shadow-md"
              />
              <p className="mt-4 font-semibold text-lg text-center sm:text-left">{director.name}</p>
              {director.title && (
                <p className="text-sm text-gray-500 text-center sm:text-left">{director.title}</p>
              )}
              {director.phone && <p className="text-xs text-gray-500 mt-1">{director.phone}</p>}
              {director.email && <p className="text-xs text-gray-500">{director.email}</p>}
            </div>
            <div className="bg-gray-50 border rounded-xl p-6 text-gray-600 leading-relaxed text-sm whitespace-pre-line">
              {director.speech}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section id="gallery" className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {gallery.map((num) => (
                <img
                  key={num}
                  src={`/images/gallery-${num}.jpg`}
                  alt={`${SCHOOL.name} gallery photo ${num}`}
                  className="aspect-square rounded-lg object-cover border bg-white"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ANTHEM */}
      {anthem.lyrics && (
        <section id="anthem" className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">School Anthem</h2>
          <div className="bg-gray-50 border rounded-xl p-6">
            {anthem.audio && (
              <audio controls className="w-full mb-6">
                <source src={anthem.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            <div className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
              {anthem.lyrics}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section id="contact" className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="flex flex-wrap justify-center gap-10 text-sm">
            {contactItems.map((item) => (
              <div key={item.label}>
                <p className="text-white/60 mb-1">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-xs">
        <img
          src={SCHOOL.logo}
          alt={`${SCHOOL.name} logo`}
          className="w-12 h-12 mx-auto mb-3 rounded-full object-cover"
        />
        <p className="text-white font-medium mb-1 uppercase">{SCHOOL.name}</p>
        {SCHOOL.motto && <p className="italic mb-3">&ldquo;{SCHOOL.motto}&rdquo;</p>}
        <p>
          &copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
        </p>
        <a href="/login" className="text-blue-400 hover:underline mt-2 inline-block">
          Staff &amp; Student CBT Login →
        </a>
      </footer>
    </div>
  );
}