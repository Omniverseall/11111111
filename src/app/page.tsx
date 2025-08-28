import { cookies } from 'next/headers';
import { Header } from "@/widgets/header";
import { MainPage } from "@/pages-fsd/main-page";
import { Footer } from "@/widgets/footer";
import { Language } from "@/shared/config/translations";
import { getDictionary } from "@/shared/lib/i18n";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const lang = (cookies().get('language')?.value as Language) ?? 'ru';
  const dict = getDictionary(lang);

  return (
    <div className="relative">
      <div className="parallax-bg"></div>
      <Header dict={dict} />
      <main>
        <MainPage dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
