import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroVideo from "./components/HeroVideo"

const Hero = () => {
  return (
    <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <HeroVideo />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span className="bg-[rgba(0,0,0,0.7)] px-4 py-2 rounded-md border border-yellow-500">
          <Heading
            level="h1"
            className="text-5xl leading-10 text-yellow-400 font-semibold drop-shadow-lg"
          >
            A Marketplace For Weapons
          </Heading>
        </span>
        {/* Down Arrow */}
        <div className="mt-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
 className="h-12 w-12 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero
