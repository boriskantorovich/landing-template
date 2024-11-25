export const videos = {
  testimonial: {
    src: process.env.NEXT_PUBLIC_VIDEO_TESTIMONIAL || "",
  },
  moreTestimonials: [
    {
      src: process.env.NEXT_PUBLIC_VIDEO_TESTIMONIAL_1 || "",
    },
    {
      src: process.env.NEXT_PUBLIC_VIDEO_TESTIMONIAL_2 || "",
    }
  ]
} as const;
