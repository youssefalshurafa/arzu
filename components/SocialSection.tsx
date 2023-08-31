import Image from 'next/image';

const SocialSection = () => {
  return (
    <div className=" bg-slate-50 p-4">
      <p className="text-4xl font-bold p-2 text-center">Follow Us For More!</p>
      <div className="flex gap-4 justify-center mt-3">
        <Image
          className=" rounded-full"
          src="/assets/facebook.png"
          alt="facebook"
          width={75}
          height={75}
        />
        <Image
          src="/assets/instagram.png"
          alt="instagram"
          width={75}
          height={75}
        />
        <Image
          src="/assets/telegram.png"
          alt="telegram"
          width={75}
          height={75}
        />
      </div>
    </div>
  );
};

export default SocialSection;
