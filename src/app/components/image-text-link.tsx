import Image from "next/image";
import Link from "next/link";

type ImageTextLinkProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
};

export default function ImageTextLink({
  imageSrc = "/portrait-image.png",
  imageAlt = "placeholder",
  title,
  description,
  linkHref = "/services",
}: Partial<ImageTextLinkProps>) {
  return (
    <div className="mx-8 md:w-1/4 text-center font-light">
      <Image src={imageSrc} alt={imageAlt} width={1080} height={1920} />
      <p className="mt-12 text-3xl">{title}</p>
      <p className="mt-4 mx-16 text-lg font-sans">{description}</p>
      <Link
        href={linkHref}
        className="mt-2 inline-block text-black hover:text-fv-700 underline text-lg hidden!"
      >
        Les mer
      </Link>
    </div>
  );
}
