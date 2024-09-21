import Image from "next/image";
import * as S from "./ImageBox.style";

interface ImageBoxProps {
  src?: any;
  text?: string;
  className?: string;
}

export const ViewImageBox = ({ text, src }: ImageBoxProps) => {
  return (
    <S.FindImageBox>
      <img src={src} alt="view" width="20" height="20" />
      {text}
    </S.FindImageBox>
  );
};

export const BookmarkImageBox = ({ text, src }: ImageBoxProps) => {
  return (
    <S.BookImageBox>
      <img src={src} alt="view" />
      {text}
    </S.BookImageBox>
  );
};
