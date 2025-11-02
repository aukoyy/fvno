import Image from 'next/image';
import Link from 'next/link';

type ImageTextLinkProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
};

export default function ImageTextLink({
  imageSrc = '/portrait-image.png',
  imageAlt = 'placeholder',
  title,
  description,
  linkHref = '/services',
}: Partial<ImageTextLinkProps>) {
  return (
    <div className="mx-8 md:w-1/4 text-center ">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1080}
        height={1920}
      />
      <p className="mt-12 text-2xl">{title}</p>
      <p className="mt-4">{description}</p>
      <Link
        href={linkHref}
        className="mt-2 inline-block text-black hover:text-fv-700 underline text-lg"
      >
        Les mer
      </Link>
    </div>
  );
}