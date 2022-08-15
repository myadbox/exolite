// @ts-check
/// <reference types="@myadbox/exoplanet-toolkit/src/types/global"/>
/// <reference types="@myadbox/exoplanet-toolkit/vendor/gsap/types"/>

/** @type ExoAnimation */

const animation = (gsap) => {
  const globalTimeline = gsap
    .timeline({ id: `template` })
    .fromTo(
      `#reactLogo`,
      { rotation: 0 },
      { duration: 4, rotation: 360, ease: `linear` }
    )

  console.log(`Animation duration: ` + globalTimeline.totalDuration())
  return globalTimeline
}

export default animation
