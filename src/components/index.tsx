'use client'

import dynamic from 'next/dynamic'
import { features } from '@/config/features'
import { LoadingPlaceholder } from './ui/loading-placeholder'

// Direct exports for non-dynamic components
export { HeroComponent } from './hero'
export { NonprofitNavComponent } from './nonprofit-nav'

// Loading component factory
const createLoadingComponent = (height: string) => () => <LoadingPlaceholder height={height} />

// Dynamic component factory
const createDynamicComponent = <T extends object>(
  importFn: () => Promise<{ [key: string]: T }>,
  componentName: string,
  height: string,
  featureFlag?: boolean
) => {
  return dynamic(() => 
    (featureFlag ?? true)
      ? importFn().then(mod => mod[componentName] as any)
      : Promise.resolve(() => null), {
    loading: createLoadingComponent(height),
    ssr: false
  })
}

// Dynamic exports
export const CtaComponent = createDynamicComponent(
  () => import('./cta'),
  'CtaComponent',
  '600px'
)

export const MedkitComponent = createDynamicComponent(
  () => import('./medkit'),
  'MedkitComponent',
  '600px',
  features.enableMedkit
)

export const DonationFormWithCta = createDynamicComponent(
  () => import('./donation-form-with-cta'),
  'DonationFormWithCta',
  '800px',
  features.enableDonations
)

export const StatisticsComponent = createDynamicComponent(
  () => import('./statistics'),
  'StatisticsComponent',
  '400px',
  features.enableStatistics
)

export const VideoTestimonial = createDynamicComponent(
  () => import('./video-testimonial'),
  'VideoTestimonial',
  '400px',
  features.enableVideos
)

export const HowWeHelpComponent = createDynamicComponent(
  () => import('./how-do-we-help'),
  'HowWeHelpComponent',
  '600px',
  features.enableHowWeHelp
)

export const AboutUsComponent = createDynamicComponent(
  () => import('./about-us'),
  'AboutUsComponent',
  '600px',
  features.enableAboutUs
)

export const VideoGrid = createDynamicComponent(
  () => import('./video-grid'),
  'VideoGrid',
  '400px',
  features.enableVideos
)

export const FooterComponent = createDynamicComponent(
  () => import('./footer'),
  'FooterComponent',
  '200px',
  features.enableFooter
)
