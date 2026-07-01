import { useState } from 'react';
import logo from '../LogoDagestanFond.png';

const translations = {
  ru: {
    navBrand: 'DAGESTAN - FOND',
    heroTitle: 'DAGESTAN - FOND',
    heroSlogan:
      'Поддержка земляков из Дагестана и сохранение культурного наследия во Франции',
    activitiesTitle: 'Основные виды деятельности',
    activitiesSubtitle: 'Уставной блок организации',
    card1Title: 'Социальная, материальная и финансовая помощь',
    card1Desc:
      'Организация благотворительной поддержки, распределение гуманитарной помощи (продукты, быт) и оказание экстренной финансовой помощи землякам — выходцам из Дагестана и их семьям, оказавшимся в сложных жизненных обстоятельствах во Франции.',
    card2Title: 'Касса солидарности и взаимопомощи',
    card2Desc:
      'Принципы работы кассы основаны на взаимной поддержке семей нашей диаспоры. Каждая участвующая дагестанская семья вносит фиксированный взнос в размере 100 евро. Эти средства формируют целевой фонд, который используется исключительно для покрытия расходов на репатриацию и экстренную помощь семьям участников в случае тяжелой утраты. Официальный статус фонда гарантирует полную прозрачность, строгий учет средств и защищенность каждого участника программы.',
    joinSolidarity: 'Вступить в кассу солидарности',
    alAmanaTitle: 'Программа «Аль-Амана»',
    alAmanaSubtitle: 'Культурно-образовательные инициативы для подрастающего поколения.',
    alAmana1Title: 'Изучение языков',
    alAmana1Desc:
      'Обучение детей алфавиту, чтению, письму и базовой грамматике арабского языка, а также изучение родных языков Дагестана. Программа направлена на развитие устной речи, памяти и двуязычия у подрастающего поколения.',
    alAmana2Title: 'Воспитание благородства и этика',
    alAmana2Desc:
      'Привитие детям высоких морально-этических качеств, честности, трудолюбия, уважения к родителям и старшим. Формирование культуры благородного поведения в обществе, взаимовыручки и личной дисциплины.',
    alAmana3Title: 'История и цивилизация Дагестана',
    alAmana3Desc:
      'Знакомство с ключевыми историческими вехами, географическими особенностями и культурным наследием Дагестана. Изучение биографий выдающихся исторических деятелей и знакомство с традициями и искусством края.',
    footerBankTitle: 'Банковские реквизиты',
    bank: 'Банк',
    holder: 'Владелец счёта',
    iban: 'IBAN',
    bic: 'BIC',
    address: 'Адрес банка',
    joinTelegram: 'Присоединиться к сообществу в Telegram',
    copyright: '© 2026 DAGESTAN - FOND. Association à but non lucratif.',
  },
  fr: {
    navBrand: 'DAGESTAN - FOND',
    heroTitle: 'DAGESTAN - FOND',
    heroSlogan:
      'Soutien aux ressortissants du Daghestan et préservation du patrimoine culturel en France',
    activitiesTitle: 'Activités principales',
    activitiesSubtitle: 'Objet statutaire de l\'association',
    card1Title: 'Entraide matérielle, financière et sociale',
    card1Desc:
      'Organisation d\'actions de solidarité, distribution d\'aide matérielle (denrées, produits de première nécessité) et octroi d\'une aide financière ponctuelle d\'urgence pour les membres de la communauté daghestanaise et leurs familles en situation de grande précarité.',
    card2Title: 'Fonds de solidarité',
    card2Desc:
      'Le fonctionnement de notre caisse repose sur l\'entraide mutuelle des familles de notre communauté. Chaque famille daghestanaise participante verse une cotisation fixe de 100 euros. Ces fonds constituent une réserve dédiée, utilisée exclusivement pour couvrir les frais de rapatriement et apporter une aide d\'urgence aux familles des membres participants en cas de décès. Le statut officiel du fonds garantit une transparence totale, une gestion rigoureuse et la protection de chaque foyer adhérant.',
    joinSolidarity: 'Adhérer à la caisse de solidarité',
    alAmanaTitle: 'Programme « Al-Amana »',
    alAmanaSubtitle:
      'Initiatives culturelles et éducatives pour la jeune génération.',
    alAmana1Title: 'Apprentissage des langues',
    alAmana1Desc:
      'Cours d\'alphabétisation, de lecture et d\'écriture de la langue arabe, ainsi que l\'apprentissage des langues maternelles du Daghestan. Ce programme vise à développer le bilinguisme, la mémoire et les compétences linguistiques chez les enfants.',
    alAmana2Title: 'Éthique, valeurs et savoir-vivre',
    alAmana2Desc:
      'Transmission des valeurs morales et civiques universelles, telles que le respect des parents et des aînés, l\'honnêteté et la solidarité. Éducation au savoir-vivre en société, à la bienveillance et à la discipline personnelle.',
    alAmana3Title: 'Histoire et Civilisation du Daghestan',
    alAmana3Desc:
      'Découverte des grandes étapes historiques, des spécificités géographiques et du patrimoine culturel du Daghestan. Étude des biographies des figures historiques marquantes et découverte des traditions de la région.',
    footerBankTitle: 'Coordonnées bancaires',
    bank: 'Banque',
    holder: 'Titulaire',
    iban: 'IBAN',
    bic: 'BIC',
    address: 'Domiciliation',
    joinTelegram: 'Rejoindre notre communauté sur Telegram',
    copyright: '© 2026 DAGESTAN - FOND. Association à but non lucratif.',
  },
};

const bankInfo = {
  bank: 'Crédit Mutuel',
  holder: 'DAGESTAN - FOND',
  iban: 'FR76 1027 8361 9700 0113 2690 262',
  bic: 'CMCIFR2A',
  address: 'CCM LES COUETS, 24 RUE DES ECOLES, LES COUETS, 44340 BOUGUENAIS',
};

function DagestanFond() {
  const [lang, setLang] = useState('ru');
  const t = translations[lang];

  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg df-navbar sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#top">
            <img
              src={logo}
              alt="DAGESTAN - FOND"
              className="df-logo"
            />
            <span className="df-brand-title font-display">{t.navBrand}</span>
          </a>

          <div className="df-lang-switch ms-auto">
            <button
              type="button"
              className={`df-lang-btn${lang === 'ru' ? ' active' : ''}`}
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
            >
              RU
            </button>
            <button
              type="button"
              className={`df-lang-btn${lang === 'fr' ? ' active' : ''}`}
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
            >
              FR
            </button>
          </div>
        </div>
      </nav>

      <header id="top" className="df-hero">
        <div className="df-hero-geo" aria-hidden="true" />
        <div className="container position-relative">
          <h1 className="font-display">{t.heroTitle}</h1>
          <p className="df-hero-lead">{t.heroSlogan}</p>
        </div>
      </header>

      <section className="df-section" style={{ background: 'var(--df-milk)' }}>
        <div className="container">
          <h2 className="df-section-title font-display text-center">
            {t.activitiesTitle}
          </h2>
          <p className="df-section-subtitle text-center">{t.activitiesSubtitle}</p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card df-card shadow-sm p-4">
                <div className="df-card-icon df-card-icon--help">
                  <i className="bi bi-heart-fill" aria-hidden="true" />
                </div>
                <h3>{t.card1Title}</h3>
                <p>{t.card1Desc}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card df-card shadow-sm p-4">
                <div className="df-card-icon df-card-icon--shield">
                  <i className="bi bi-shield-shaded" aria-hidden="true" />
                </div>
                <h3>{t.card2Title}</h3>
                <p>{t.card2Desc}</p>
                <button
                  type="button"
                  className="df-btn-primary"
                  onClick={scrollToContacts}
                >
                  {t.joinSolidarity}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="df-section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="df-alamana">
            <h2 className="font-display">{t.alAmanaTitle}</h2>
            <p className="df-alamana-subtitle">{t.alAmanaSubtitle}</p>

            <div className="df-alamana-item">
              <h4>
                <i className="bi bi-translate" aria-hidden="true" />
                {t.alAmana1Title}
              </h4>
              <p>{t.alAmana1Desc}</p>
            </div>

            <div className="df-alamana-item">
              <h4>
                <i className="bi bi-star-fill" aria-hidden="true" />
                {t.alAmana2Title}
              </h4>
              <p>{t.alAmana2Desc}</p>
            </div>

            <div className="df-alamana-item">
              <h4>
                <i className="bi bi-book-fill" aria-hidden="true" />
                {t.alAmana3Title}
              </h4>
              <p>{t.alAmana3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="df-footer">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-6">
              <h5>{t.footerBankTitle}</h5>
              <ul className="df-bank-details">
                <li>
                  <strong>{t.bank}:</strong> {bankInfo.bank}
                </li>
                <li>
                  <strong>{t.holder}:</strong> {bankInfo.holder}
                </li>
                <li>
                  <strong>{t.iban}:</strong> {bankInfo.iban}
                </li>
                <li>
                  <strong>{t.bic}:</strong> {bankInfo.bic}
                </li>
                <li>
                  <strong>{t.address}:</strong> {bankInfo.address}
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-md-end">
              <h5>&nbsp;</h5>
              <a
                href="https://t.me/"
                className="df-btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-telegram" aria-hidden="true" />
                {t.joinTelegram}
              </a>
            </div>
          </div>

          <p className="df-copyright text-center mb-0">{t.copyright}</p>
        </div>
      </footer>
    </>
  );
}

export default DagestanFond;
