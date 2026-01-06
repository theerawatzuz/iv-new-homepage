import { isSVG } from "helpers/utils";
import NextImage, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

type Props = ImageProps & {
  fetchPriority?: "high" | "low" | "auto";
  defaultImage?: string;
};

type imageLoaderProp = {
  src: string;
  width: number;
  quality?: number;
};

const imageLoader = ({ src, width, quality }: imageLoaderProp): string => {
  return `${
    process.env.NEXT_PUBLIC_MY_REAL_ENDPOINT
  }/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
};

const Image = (props: Props) => {
  const { defaultImage, src, alt = "", style, ...imageProps } = props;

  const [imageSrc, setImageSrc] = useState(src || defaultImage!);
  const [loading, setLoading] = useState(true);
  const [requireLoader, setRequireLoader] = useState<boolean>(false);

  useEffect(() => {
    if (src) {
      setImageSrc(src);
      setRequireLoader(!isSVG(src as string));
      setLoading(false);
    }
  }, [src]);

  if ((src as string).startsWith("/images"))
    return <NextImage src={src} alt={alt} {...imageProps} />;

  return (
    <>
      {!loading && (
        <NextImage
          // loader={requireLoader ? imageLoader : undefined}
          style={{
            width: imageProps.width,
            height: imageProps.height,
            ...style,
          }}
          alt={alt as string}
          {...imageProps}
          src={imageSrc}
          onError={() => setImageSrc(defaultImage!)}
          placeholder={
            imageProps.priority && imageProps.loading === "eager"
              ? "blur"
              : "empty"
          }
          blurDataURL={imageLoader({
            src: imageSrc as string,
            width: imageProps.width as number,
            quality: 25,
          })}
        />
      )}
    </>
  );
};

export default Image;
