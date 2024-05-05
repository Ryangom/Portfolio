import Lottie from "lottie-react"
import heroRight from "../assets/computer.json"


export default function Hero() {
  return (
    <section className="my-11">
      <div className="flex flex-col items-center gap-6 md:flex-row ">
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl mb-16 font-bold">Hello There!👋</h1>
          <p className="text_secondary">I’m <span className="font-bold">Jonas Ryan Gomes</span>, a design-minded front-end software engineer. Focused on building beautiful interfaces & experiences 💪</p>

          <p className="text-2xl mt-20 mb-20">Get in touch 👉 <span className="underline underline-offset-8 decoration-white"> ryangom73@gmail.com</span></p>

          <a
            href="/assets/education/CV.pdf"
            target="_blank"
            rel='noopener noreferrer'
            className="text-lg bg-yellow-500 px-10 py-4 rounded-lg  text-white font-bold"
          >Download CV</a>

        </div>

        <div className="w-full hidden md:block">
          <Lottie animationData={heroRight} />
        </div>
      </div>
      {/* social media */}

    </section>
  )
}
