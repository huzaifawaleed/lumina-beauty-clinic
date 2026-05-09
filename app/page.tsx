import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

// Below-the-fold sections — code-split into separate JS chunks
const StatsSparkles = dynamic(() => import('@/components/StatsSparkles'))
const SocialProof    = dynamic(() => import('@/components/SocialProof'))
const Pricing        = dynamic(() => import('@/components/Pricing'))
const FAQ            = dynamic(() => import('@/components/FAQ'))
const Footer         = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <StatsSparkles />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
