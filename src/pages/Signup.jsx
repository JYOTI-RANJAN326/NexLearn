import signupImg from "../assets/Images/signup.jpeg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Start Your Learning Journey with NEX Learn"
      description1="Master in-demand skills, build real-world projects, and grow at your own pace."
      description2="Your future starts with the right skills."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup