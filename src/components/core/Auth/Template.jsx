import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <main className="w-full bg-richblack-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-[90%] max-w-[1200px] items-center justify-between gap-16 py-12">

        {/* LEFT - FORM */}
        <div className="w-[45%] max-w-[450px]">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            {title}
          </h1>

          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">
              {description1}
            </span>{" "}

            <span className="font-edu-sa font-bold italic text-cyan-300">
              {description2}
            </span>
          </p>

          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-[45%] max-w-[500px]">
          <img
            src={image}
            alt="NEX Learn students"
            className="block h-auto w-full"
          />
        </div>

      </div>
    </main>
  )
}

export default Template