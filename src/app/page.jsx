import FeaturesFive from '@/components/FeaturesFive';
import FeaturesFour from '@/components/FeaturesFour';
import FeaturesOne from '@/components/FeaturesOne';
import FeaturesSix from '@/components/FeaturesSix';
import FeaturesThree from '@/components/FeaturesThree';
import FeaturesTwo from '@/components/FeaturesTwo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatisticsOne from '@/components/StatisticsOne';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <StatisticsOne />
      <hr className="divider" />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <FeaturesFour />
      <FeaturesFive />
      <FeaturesSix />
    </>
  );
}
