export type Locale = "ru" | "uz" | "en"

export const ru = {
  meta: {
    title: "Edoline — платформа электронного документооборота",
    description: "ЭДО для корпоративного управления: документы, согласования, E‑IMZO, SLA, on‑prem."
  },
  preloader: { subtitle: "Загружаем Edoline — корпоративную платформу ЭДО" },
  nav: { features:"Возможности", pricing:"Тарифы", contact:"Связаться", tour:"Тур" },
  hero: {
    badge:"Платформа ЭДО",
    title:"Edoline — электронный документооборот для корпоративного управления",
    subtitle:"Создание, согласование, E‑IMZO, контроль исполнения и архив.",
    ctaPricing:"Тарифы"
  },
  features: { header: "Возможности" },
  pricing:{ title:"Тарифы", currency:"сум/мес", order:"Заказать", plans:[
    { id:"starter", name:"Starter", price:"100,000", features:["До 5 пользователей","Базовая функциональность","Поддержка по email"] },
    { id:"team", name:"Team", price:"300,000", features:["До 20 пользователей","Расширенные возможности","Приоритетная поддержка","Индивидуальная настройка"] },
    { id:"professional", name:"Professional", price:"700,000", features:["До 50 пользователей","Полная функциональность","Круглосуточная поддержка"] },
    { id:"enterprise", name:"Enterprise", price:"1,200,000", features:["До 100 пользователей","Полная функциональность","Персональный менеджер"] },
    { id:"corporate", name:"Corporate", price:"По запросу", features:["Неограниченно пользователей","Индивидуальная настройка","VIP поддержка","Полная функциональность"] }
  ]},
  contact: { title:"Свяжитесь с нами", subtitle:"Оставьте заявку — покажем демо и подберём тариф.", name:"ФИО", phone:"Телефон", submit:"Отправить", success:"Заявка отправлена", error:"Ошибка отправки", email:"spacenetdev@gmail.com", phoneTxt:"+99897 431 14 05", ceo:"Аброрхон Абидов, CEO" },
  footer: { rights:"© 2025 Edoline. Все права защищены." },
  experience: {
    next:"Дальше", prev:"Назад", cta:"Оставить заявку",
    steps: {
      constellation:"Оргструктура", builder:"Конструктор маршрута", playback:"Симуляция",
      board:"Голосование", sign:"Подпись E‑IMZO", sla:"Контроль SLA", vault:"Хранилище (On‑Prem)", archive:"Архив", summary:"Итоги"
    },
    descr: {
      constellation:"Контекст согласований: Правление, Комитеты, руководители, сотрудники.",
      builder:"Маршрут: Черновик → Юрист → Финансы → Комитет → E‑IMZO → Исполнение → Архив.",
      playback:"Документ движется по маршруту и останавливается на «Голосование».",
      board:"Заседание правления: голоса, проценты и решение.",
      sign:"Подпись E‑IMZO и QR‑верификация.",
      sla:"Лента сроков и эскалации.",
      vault:"On‑Prem, аудит и резервные копии.",
      archive:"Поиск в архиве и быстрый доступ.",
      summary:"За минуту — полный цикл Edoline."
    }
  }
}

export const uz = {
  meta: { title:"Edoline — elektron hujjat aylanishi platformasi", description:"Korporativ EDI: hujjatlar, kelishuvlar, E‑IMZO, SLA, on‑prem." },
  preloader: { subtitle:"Edoline yuklanmoqda — korporativ EDI platformasi" },
  nav:{ features:"Imkoniyatlar", pricing:"Tariflar", contact:"Aloqa", tour:"Tur" },
  hero:{ badge:"EDI platformasi", title:"Edoline — korporativ EDI", subtitle:"Yaratish, kelishish, E‑IMZO, ijro nazorati va arxiv.", ctaPricing:"Tariflar" },
  features: { header: "Imkoniyatlar" },
  pricing: { ...ru.pricing, currency:"so‘m/oy", order:"Buyurtma" },
  contact: { ...ru.contact, title:"Biz bilan bog‘laning", submit:"Yuborish", success:"Ariza yuborildi", error:"Yuborishda xatolik" },
  footer: ru.footer,
  experience: {
    next:"Keyingi", prev:"Oldingi", cta:"Ariza qoldirish",
    steps:{ constellation:"Tashkiliy tuzilma", builder:"Marshrut konstruktori", playback:"Simulyatsiya", board:"Ovoz berish", sign:"E‑IMZO imzo", sla:"SLA nazorati", vault:"Saqlash (On‑Prem)", archive:"Arxiv", summary:"Xulosa" },
    descr:{ constellation:"Boshqaruv, qo'mitalar, rahbarlar, xodimlar.", builder:"Marshrut: Qoralama → Yuridik → Moliya → Qo'mita → E‑IMZO → Ijro → Арxiv.", playback:"Hujjat «Ovoz berish» bosqichida to'xtaydi.", board:"Ovozlar и natija.", sign:"E‑IMZO va QR tasdiqlash.", sla:"Muddatlar va eslatmalar.", vault:"On‑Prem, audit, zaxira.", archive:"Qidiruv va tezkor kirish.", summary:"Bir daqiqada to‘liq sikl." }
  }
}

export const en = {
  meta: { title:"Edoline — electronic document management", description:"Corporate EDM: documents, approvals, E‑IMZO, SLA, on‑prem." },
  preloader: { subtitle:"Loading Edoline — corporate EDM" },
  nav:{ features:"Features", pricing:"Pricing", contact:"Contact", tour:"Tour" },
  hero:{ badge:"EDM Platform", title:"Edoline — corporate EDM", subtitle:"Create, approve, E‑IMZO, execution control and archive.", ctaPricing:"Pricing" },
  features: { header: "Features" },
  pricing: { ...ru.pricing, currency:"UZS/mo", order:"Order" },
  contact: { ...ru.contact, title:"Contact us", submit:"Send", success:"Request sent", error:"Sending error" },
  footer: ru.footer,
  experience: {
    next:"Next", prev:"Back", cta:"Request a demo",
    steps:{ constellation:"Org structure", builder:"Route builder", playback:"Simulation", board:"Voting", sign:"E‑IMZO signing", sla:"SLA tracking", vault:"Vault (On‑Prem)", archive:"Archive", summary:"Summary" },
    descr:{ constellation:"Boards, committees, managers and employees.", builder:"Route: Draft → Legal → Finance → Committee → E‑IMZO → Execution → Archive.", playback:"Document stops at “Voting”.", board:"Voting and decision.", sign:"E‑IMZO with QR verification.", sla:"Timeline and escalations.", vault:"On‑Prem, audit, backups.", archive:"Search and quick access.", summary:"Full cycle in a minute." }
  }
}

export async function getDictionary(locale: Locale) { if (locale==="ru") return ru; if (locale==="uz") return uz; return en }
