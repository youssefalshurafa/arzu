import Image from 'next/image';
import React from 'react';

const CategorySection = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-1 py-2">
      <Image
        src="https://cdn-media.prettylittlething.com/bms/media/2023/08/23/2Zf3IkK2HxqAunlC5uEu2vFXSGbV5UZHKAqnnIOZ.jpg?imwidth=800"
        alt="image"
        width={500}
        height={500}
      />
      <Image
        src="https://cdn-media.prettylittlething.com/bms/media/2023/08/23/MQHWihLhv74gYbF3FNDZQ3kUqHQLgTwYQ4NsvhWE.jpg?imwidth=800"
        alt="image"
        width={500}
        height={500}
      />
      <Image
        src="https://cdn-media.prettylittlething.com/bms/media/2023/08/23/6CywiPZ2dDvI4zTgUKzyoFZezPQrWcjn4YuP6wqm.jpg?imwidth=800"
        alt="image"
        width={500}
        height={500}
      />
      <Image
        src="https://cdn-media.prettylittlething.com/bms/media/2023/08/23/0ogugGTEOianlSaLFyIq83zk0xQC5EIqarlP8hdE.jpg?imwidth=800"
        alt="image"
        width={500}
        height={500}
      />
    </section>
  );
};

export default CategorySection;
