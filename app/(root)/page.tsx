import Banner from '@/components/Banner';
import CategorySection from '@/components/CategorySection';
import SocialSection from '@/components/SocialSection';

export default async function Home() {
  return (
    <>
      <div className=" ">
        <Banner />
        <CategorySection />
        <SocialSection />
      </div>
    </>
  );
}
