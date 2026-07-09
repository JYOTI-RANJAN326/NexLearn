import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div className="w-full py-16">
      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-20">

        {/* LEFT - INSTRUCTOR IMAGE */}
        <div className="w-full min-w-0 lg:w-1/2">
          <div className="relative mx-auto w-full max-w-[520px]">

            {/* Background decoration */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-cyan-400/30 bg-cyan-400/5" />

            {/* Main image */}
            <img
              src={Instructor}
              alt="Become an instructor at NEX Learn"
              className="relative z-10 block h-auto w-full rounded-2xl object-contain"
            />

          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="flex w-full min-w-0 flex-col gap-8 lg:w-1/2">

          <h1 className="text-4xl font-semibold leading-tight">
            Share Your Knowledge.
            <br />
            Become an
            <HighlightText text={" Instructor"} />
          </h1>

          <p className="w-full max-w-[550px] text-[16px] font-medium leading-7 text-richblack-300">
            Join NEX Learn and turn your knowledge into meaningful learning
            experiences. We provide the platform and tools you need to create
            courses, reach ambitious learners, and teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InstructorSection