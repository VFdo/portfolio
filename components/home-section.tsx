'use client'

import { useWeather } from '@/hooks/useWeather';
import { motion } from "motion/react";

function getScene(weatherCode?: number, isDay = true) {
  const day = isDay ? 'day' : 'night'
  console.log("it is " + day)

  const rainy = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]
  // const cloudy = [1, 2, 3, 45, 48]

  if (rainy.includes(weatherCode ?? -1)) {
    return {
      image: `/backdrops/rain-${day}.jpg`,
    }
  }
  console.log("returning clear " + day)
  return {
    image: `/backdrops/clear-${day}.jpg`,
  }
}

export function HomeSection() {
  const { weatherCode, isDay} = useWeather()
  const scene = getScene(weatherCode, isDay);
  const ABOUT = "I'm a Software Engineer who enjoys designing and building software that lasts. From web applications to scalable systems, I focus on creating clean, maintainable solutions that solve real problems and can grow alongside the people who use them."

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Backdrop image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scene.image || '/clear-night.jpg'}
          // alt={scene.alt}
          className="h-full w-full object-cover"
        />
        {/* Soft wash so the black text stays readable over the art */}
        <div className="absolute inset-0 bg-background/60" />

      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-6 text-center text-6xl font-semibold sm:text-7xl">
          Welcome.
        </h1>
        {/* <Typewriter
          text=
          className="flex min-h-[3.5rem] max-w-xl items-center justify-center text-center text-lg leading-relaxed text-foreground"
        /> */}

          <motion.p
            initial="hiddenVariants"
            animate="visibleVariants"
           className="text-muted-foreground max-w-xl pt-4 max-sm:pt-2 text-base max-sm:text-sm break-normal"
          >
            {ABOUT.split(" ").map((word, idx) => (
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.2 + idx / 20 }}
                viewport={{ once: true }}
                key={`${word}-${idx}`}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>


      </div>
    </section>
  )
}

