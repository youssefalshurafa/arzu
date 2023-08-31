import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="  ">
        <Image
          src="https://cdn-media.prettylittlething.com/bms/media/2023/08/25/lkLue4PQT1whfdiGMafK7YN2eNt76Yp3aeuSO9FV.jpg?imwidth=2048"
          alt="banner"
          width={1500}
          height={1500}
          style={{ margin: 'auto' }}
        />
      </div>
    </>
  );
};

export default Banner;
