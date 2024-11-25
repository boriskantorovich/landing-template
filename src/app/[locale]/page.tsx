'use client'

import { Suspense } from 'react'
import { features } from '@/config/features'
import {
  HeroComponent,
  CtaComponent,
  MedkitComponent,
  DonationFormWithCta,
  StatisticsComponent,
  VideoTestimonial,
  HowWeHelpComponent,
  AboutUsComponent,
  VideoGrid,
  FooterComponent
} from '@/components'

export default function LocalePage() {
  return (
    <>
      <HeroComponent />
      <div className="mx-auto">
        <Suspense fallback={<div className="h-[600px]" />}>
          <div id="learn-more">
            <CtaComponent />
          </div>
        </Suspense>

        {features.enableMedkit && (
          <Suspense fallback={<div className="h-[600px]" />}>
            <MedkitComponent />
          </Suspense>
        )}
        
        {features.enableDonations && (
          <Suspense fallback={<div className="h-[800px]" />}>
            <div id="donate-form">
              <DonationFormWithCta showCTA={true} variant="urgent" formId="form1" />
            </div>
          </Suspense>
        )}

        {/* Rest of the components with feature flags */}
      </div>
    </>
  )
}
