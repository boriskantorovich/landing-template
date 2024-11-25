'use client';

import { features } from '@/config/features';
import dynamic from 'next/dynamic';

const VideoTestimonial = dynamic(() => 
  features.enableVideos 
    ? import('./video-testimonial').then(mod => mod.VideoTestimonial)
    : Promise.resolve(() => null)
);

const VideoGrid = dynamic(() => 
  features.enableVideos 
    ? import('./video-grid').then(mod => mod.VideoGrid)
    : Promise.resolve(() => null)
);

export { VideoTestimonial, VideoGrid };
