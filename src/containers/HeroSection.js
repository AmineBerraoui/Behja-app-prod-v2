import React from 'react';
import { useTranslation } from 'react-i18next';
import StaticsSection from '../components/StaticsSection';
import { Link, useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const activeLanguage = i18n.language;
  console.log(activeLanguage);
  const navigate = useNavigate();
  return (
    <section className='mt-[150px] w-[90%] md:w-[75%] mb-10' id='herosection'>
      <div
        className={`flex ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } justify-between`}
      >
        <div>
          <div
            className={`flex flex-col ${
              i18n.language === 'Ar' ? 'items-end' : 'items-start'
            } gap-4`}
          >
            <h1
              className={`heading-02-bold text-primary-900  ${
                i18n.language === 'Ar' ? 'text-end' : 'text-start'
              } lg:text-6xl`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('Your trusted partner\non the path to\nhomeownership.')}
            </h1>
            <p
              className={`paragraph-03-regular ${
                i18n.language === 'Ar' ? 'text-end' : 'text-start'
              } text-neutral-500 whitespace-pre-line`}
            >
              {t(
                'Rent with built-in savings for your down payment.\nOur rent-to-own platform provides a flexible option\nfor home purchasing'
              )}
            </p>
          </div>
          <div className='mt-6'>
            <p
              className={`paragraph-01 ${
                i18n.language === 'Ar' ? 'text-end' : 'text-start'
              } text-neutral-700 mb-3`}
            >
              {t('Let’s start by simulating your rent')}
            </p>
            <div
              className={`flex flex-col gap-3 ${
                i18n.language === 'Ar' ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <Link
                to='/rentsimulator'
                className='paragraph-01 bg-primary-600 text-shades-white px-8 py-3 rounded'
              >
                {t('Let’s start by simulating your rent')}
              </Link>
              <button
                className='paragraph-01 bg-primary-300 px-8 py-3 rounded'
                onClick={() => navigate('/homefinder')}
              >
                {t('Find a property')}
              </button>
            </div>
          </div>
        </div>
        <div className='hidden h-full md:relative md:block'>
          <img
            src='./assets/Saudi_woman.png'
            className={`h-[357px] w-[424px] rounded-tl-[235px] object-cover ${
              i18n.language === 'Ar' ? 'scale-x-[-1]' : 'scale-x-[1]'
            }`}
            alt='Saudi_woman'
          />
          <img
            src='./assets/Saudi_man.png'
            className={`absolute top-0 ${
              i18n.language === 'Ar' ? 'right-0' : 'left-0'
            } w-[150px] h-[150px] rounded-full`}
            alt='Saudi_man'
          />
          <img
            src='./assets/LogoSvg.svg'
            className={`absolute bottom-2 z-10 ${
              i18n.language === 'Ar' ? 'left-2' : 'right-2'
            }`}
            alt='behja logo'
          />
        </div>
      </div>
      <div
        className={`flex items-center ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } mt-7 gap-2`}
      >
        <img src='./assets/youtube.svg' alt='youtube-logo' />
        <p className='paragraph-01-underline text-neutral-700'>
          {t('Watch How it Works')}
        </p>
      </div>
      <div
        className={`flex ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } items-center justify-center gap-4 my-4`}
      >
        <p className='subparagraph-regular text-neutral-500'>
          {t('License number 120022677')}
        </p>
        <img
          src='./assets/realestatelogo.svg'
          alt='real estate authority logo'
          className=''
        />
      </div>
      <StaticsSection />
    </section>
  );
};

export default HeroSection;
