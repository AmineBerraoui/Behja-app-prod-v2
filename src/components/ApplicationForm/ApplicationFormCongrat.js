import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

const ApplicationFormCongrat = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [currentlang, setCurrentLang] = useState(i18n.language);


  const navigateBack = () => {
    navigate(-1);
  };

  const handleChangeLang = () => {
    if (i18n.language === 'Ar') {
      i18n.changeLanguage('En');
      setCurrentLang('En');
    } else {
      i18n.changeLanguage('Ar');
      setCurrentLang('Ar');
    }
  };
  return (
    <div className={`min-h-screen flex justify-center ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='flex flex-col px-4 pt-10 gap-4 lg:w-[50%] lg:gap-0 lg:px-24 lg:pb-8'>
      <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} justify-between pt-4`}>
          <div className='flex-col'>
            <img
              src='./assets/Logo.png'
              alt='logo'
              className='w-[82px] h-[26px] mb-2'
              onClick={() => navigate('/')}
            />
            <button onClick={navigateBack}>
              <img src='./assets/ArrowLeft.svg' alt='arrow' />
            </button>
          </div>
          <p onClick={handleChangeLang}>
            {currentlang === 'Ar' ? 'عربي' : 'English'}
          </p>
        </div>

        <div className='mt-10'>
          <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} mb-1`}>
            <p className={`paragraph-01-regular text-primary-900 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
              {t('Almost there ! One last thing to do')}
            </p>
          </div>
          <div className='bg-neutral-200 h-1 w-full'>
            <div className='h-full w-[100%] bg-primary-500' />
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
          <h1 className={`heading-03-semibold text-primary-900 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
            {t('Congratulations')}
          </h1>
          <p
            className={`paragraph-01-regular text-neutral-700 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t(
              'You are pre-qualified. We will require you to submit\nproof documents to support your application.\n\nBefore that, create your account or sign up\nso that your progress is saved.'
            )}
          </p>
        </div>

        <div className='flex flex-col items-center w-full mt-5'>
          <div className='flex flex-col  gap-4  w-full'>
            <div className='flex flex-row items-center justify-around'>
              <div
                className='flex items-center justify-around px-4 py-3 bg-neutral-50 gap-2 w-[45%] hover:cursor-pointer'
                onClick={() => navigate('/applicationformdocsupload')}
              >
                <img src='./assets/microsoft.svg' alt='microsoft' />
                <p>{t('Sign up with Microsoft')}</p>
              </div>
              <div
                className='flex items-center justify-around px-4 py-3 bg-neutral-50 gap-2 w-[45%] hover:cursor-pointer'
                onClick={() => navigate('/applicationformdocsupload')}
              >
                <img src='./assets/facebook.svg' alt='facebook' />
                <p>{t('Sign up with Facebook')}</p>
              </div>
            </div>
            <div className='flex items-center justify-around'>
              <div
                className='flex items-center justify-around px-4 py-3 bg-neutral-50 gap-2 w-[45%] hover:cursor-pointer'
                onClick={() => navigate('/applicationformdocsupload')}
              >
                <img src='./assets/linkedin.svg' alt='linkedin' />
                <p>{t('Sign up with Linkedin')}</p>
              </div>
              <div
                className='flex items-center justify-around px-4 py-3 bg-neutral-50 gap-2 w-[45%] hover:cursor-pointer'
                onClick={() => navigate('/applicationformdocsupload')}
              >
                <img src='./assets/google.svg' alt='google' />
                <p>{t('Sign up with Google')}</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between w-full'>
            <div className='h-[1px] bg-neutral-200 w-[45%]' />
            <p>{t('Or')}</p>
            <div className='h-[1px] bg-neutral-200 w-[45%]' />
          </div>

          <button
            className='w-[90%] bg-neutral-50 flex items-center justify-center  gap-2 px-4 py-3'
            onClick={() => navigate('/applicationformdocsupload')}
          >
            <AiOutlineMail />
            <p>{t('Sign up with mail')}</p>
          </button>
        </div>
      </div>

      <div className='hidden lg:block lg:w-1/2 lg:flex-grow lg:h-screen'>
        <img
          src='./assets/step-3.png'
          alt='behja'
          className='w-full h-full object-cover'
        />
        <img
          src='./assets/LogoSvg.svg'
          className='absolute bottom-0 left-[75%]'
          alt='behja'
        />
      </div>
    </div>
  );
};

export default ApplicationFormCongrat;
