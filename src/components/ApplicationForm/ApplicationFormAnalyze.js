import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './ApplicationFormAnalyze.css';

const ApplicationFormAnalyze = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/applicationformcongrat');
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className='flex items-center justify-center bg-light-background p-8 w-full h-screen mx-auto bg-primary-500'>
      <div className='w-full h-full flex items-center justify-center overflow-hidden relative'>
        <div className='absolute'>
          <div className='circle-animation'></div>
          <div className='circle-animation delay-150'></div>
          <div className='circle-animation delay-300'></div>
        </div>
        <div className=' flex flex-col items-center relative z-10'>
          <img
            src='./assets/LogoWhite.svg'
            alt='behja logo'
            className='w-10 h-10'
          />
          <p
            className='mt-4 text-center text-shades-white'
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('We are processing your informations!\nPlease wait...')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormAnalyze;
