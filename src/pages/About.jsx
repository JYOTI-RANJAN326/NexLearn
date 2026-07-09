import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"

import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div className="overflow-hidden bg-slate-950 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative  border-b border-white/10">

        {/* Background Glow */}
        <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute right-[-150px] top-[50px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-10 text-center">

          <header className="mx-auto py-24 lg:w-[75%]">

            {/* Small Badge */}
            <div className="mx-auto mb-7 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              ✦ Building the Future of Digital Learning
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Learning Without Limits.
              <br />
              Building a
              <HighlightText text={" Smarter Future"} />
            </h1>

            {/* Hero Description */}
            <p className="mx-auto mt-7 max-w-3xl text-base font-normal leading-8 text-slate-300 md:text-lg">
              NEX Learn is a modern learning ecosystem built to help ambitious
              learners master in-demand skills, learn from experienced
              instructors, build real-world projects, and confidently move
              toward their career goals.
            </p>

          </header>

          <div className="sm:h-[70px] lg:h-[140px]" />

          {/* Hero Images */}
          <div className="absolute bottom-0 left-1/2 grid w-full -translate-x-1/2 translate-y-[35%] grid-cols-3 gap-3 lg:gap-6">

            <img
              src={BannerImage1}
              alt="NEX Learn students collaborating"
              className="rounded-xl border border-white/10 shadow-2xl"
            />

            <img
              src={BannerImage2}
              alt="Digital learning experience"
              className="rounded-xl border border-cyan-400/20 shadow-2xl"
            />

            <img
              src={BannerImage3}
              alt="NEX Learn community"
              className="rounded-xl border border-white/10 shadow-2xl"
            />

          </div>
        </div>
      </section>


      {/* ================= QUOTE SECTION ================= */}
      <section className="border-b border-white/10 bg-slate-950">

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-slate-300">

          <div className="h-[120px] lg:h-[180px]" />

          <Quote />

        </div>

      </section>


      {/* ================= OUR STORY ================= */}
      <section className="relative bg-gradient-to-b from-slate-950 to-slate-900">

        {/* Glow */}
        <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10">

          <div className="flex flex-col items-center justify-between gap-14 lg:flex-row">

            {/* Story Text */}
            <div className="my-24 flex flex-col gap-7 lg:w-[50%]">

              <div className="w-fit rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">
                OUR STORY
              </div>

              <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Why We Built NEX Learn
              </h1>

              <p className="text-base font-normal leading-8 text-slate-300">
                NEX Learn began with one simple belief: great learning should
                be accessible, practical, and connected to real opportunities.
                Too many learners struggle with scattered resources, unclear
                roadmaps, and courses that teach concepts without showing how
                to apply them.
              </p>

              <p className="text-base font-normal leading-8 text-slate-300">
                We imagined a platform where learners could discover the right
                skills, follow structured learning paths, learn directly from
                experienced instructors, and turn knowledge into meaningful
                projects. NEX Learn was created to bring that experience
                together in one powerful learning ecosystem.
              </p>

            </div>

            {/* Story Image */}
            <div className="relative lg:w-[45%]">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/30 to-cyan-400/20 blur-3xl" />

              <img
                src={FoundingStory}
                alt="The story behind NEX Learn"
                className="relative rounded-2xl border border-white/10 shadow-2xl"
              />

            </div>

          </div>


          {/* ================= VISION & MISSION ================= */}
          <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Vision Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40 lg:p-10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-2xl">
                ✦
              </div>

              <h2 className="mb-5 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
                Our Vision
              </h2>

              <p className="text-base leading-8 text-slate-300">
                To create a world where every learner can access the knowledge,
                guidance, and opportunities needed to build a meaningful
                future—regardless of location, background, or starting point.
                We envision learning that adapts to people, evolves with
                technology, and turns curiosity into real capability.
              </p>

            </div>


            {/* Mission Card */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 lg:p-10">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl">
                ⚡
              </div>

              <h2 className="mb-5 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                Our Mission
              </h2>

              <p className="text-base leading-8 text-slate-300">
                Our mission is to transform learning into action. We combine
                expert-led education, structured skill development, practical
                projects, and a collaborative community so learners can move
                from understanding concepts to confidently applying them in
                the real world.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <div className="border-y border-white/10 bg-slate-900">
        <StatsComponenet />
      </div>


      {/* ================= LEARNING GRID & CONTACT ================= */}
      <section className="relative bg-slate-950 py-20">

        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-20 text-white">

          <LearningGrid />

          <ContactFormSection />

        </div>

      </section>


     

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  )
}

export default About