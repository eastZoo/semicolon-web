import BannerSection from "../../organisms/BannerSection";
import FindColonySection from "../../organisms/FindColonySection";
import ThemeSection from "../../organisms/ThemeSection";
import NoticeSection from "../../organisms/NoticeSection";
import AdSection from "../../organisms/AdSection";
import * as S from "./MainPage.style";

export default function Main() {
  return (
    <S.MainPage>
      <BannerSection />
      <FindColonySection />
      <ThemeSection />
      <NoticeSection />
      <AdSection />
    </S.MainPage>
  );
}
