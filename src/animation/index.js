// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/types"/>

/** @type ExoAnimation */
const animation = (gsap) => {
  const templateTimeline = gsap
    .timeline({id: `template`})
    .fromTo(`#reactLogo`, {rotation: 0}, {duration: 8, repeat: 20, rotation: 360, ease: `linear`})
    .fromTo(
      `#reactLogo`,
      {opacity: 0.05},
      {
        duration: 4,
        repeat: 40,
        yoyo: true,
        opacity: 0.25,
        ease: `Power1.easeIn`,
      },
      `<`
    )

  // always return the main timeline
  return templateTimeline
}

export default animation
