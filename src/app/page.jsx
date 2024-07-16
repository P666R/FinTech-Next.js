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
      <StatisticsTwo />
    </>
  );
}
