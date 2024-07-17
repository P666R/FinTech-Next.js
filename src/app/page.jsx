import FeaturesEight from '@/components/FeaturesEight';
import FeaturesEleven from '@/components/FeaturesEleven';
import FeaturesFifteen from '@/components/FeaturesFifteen';
import FeaturesFive from '@/components/FeaturesFive';
import FeaturesFour from '@/components/FeaturesFour';
import FeaturesFourteen from '@/components/FeaturesFourteen';
import FeaturesNine from '@/components/FeaturesNine';
import FeaturesOne from '@/components/FeaturesOne';
import FeaturesSeven from '@/components/FeaturesSeven';
import FeaturesSix from '@/components/FeaturesSix';
import FeaturesThirteen from '@/components/FeaturesThirteen';
import FeaturesThree from '@/components/FeaturesThree';
import FeaturesTwelve from '@/components/FeaturesTwelve';
import FeaturesTwo from '@/components/FeaturesTwo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatisticsOne from '@/components/StatisticsOne';
import StatisticsTwo from '@/components/StatisticsTwo';

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
      <FeaturesSeven />
      <FeaturesEight />
      <FeaturesNine />
      <StatisticsTwo />
      <FeaturesEleven />
      <hr className="divider" />
      <FeaturesTwelve />
      <FeaturesThirteen />
      <FeaturesFourteen />
      <FeaturesFifteen />
    </>
  );
}
