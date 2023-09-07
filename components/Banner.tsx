'use client';
import { getBanner } from '@/lib/controllers/banner.controller';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [banner, setBanner] = useState('');

  const getbanner = async () => {
    const banner = await getBanner();
    setBanner(banner.map((item) => item.imgUrl).toString());
  };

  useEffect(() => {
    getbanner();
  }, [banner]);
  return (
    <>
      <div>
        <Image
          src={banner}
          alt="banner"
          width={728}
          height={90}
          style={{ margin: 'auto' }}
        />
      </div>
    </>
  );
};

export default Banner;
