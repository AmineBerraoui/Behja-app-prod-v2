import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PiIdentificationCardThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../App';

import CheckBox from '../CheckBox';

const SecondApplicationForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { data, setData } = useMyContext();

  const [isSaudi, setIsSaudi] = useState(data?.isSaudi);
  const [isQualify, setIsQualify] = useState(data?.isQualify);

  const [isDirty, setIsDirty] = useState(false);
  const [Id, setId] = useState(data?.Id || '');
  const [errors, setErrors] = useState({
    saudi: null,
    Id: null,
    qualify: null,
  });

  const [currentlang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    if (isSaudi && isQualify && Id) setIsDirty(true);
  }, [isSaudi, isQualify, Id]);

  const validateInputs = () => {
    const newErrors = {};

    if (isSaudi === null || isSaudi === undefined) {
      newErrors.saudi = 'Please answer this question.';
    }

    if (!Id.trim()) {
      newErrors.Id = 'Please answer this question.';
    }

    if (isQualify === null || isQualify === undefined) {
      newErrors.qualify = 'Please answer this question.';
    }

    return newErrors;
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
    setErrors({ ...errors, Id: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setData({ ...data, isSaudi: isSaudi, Id: Id, isQualify: isQualify });
      if (isDirty) navigate('/thirdapplicationform');
    }
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
    <div className={`min-h-screen flex justify-center ${
      i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
    }`}>
      <div className='flex flex-col px-4 w-full pt-10 gap-4 lg:w-[50%] lg:gap-0 lg:px-24 lg:pb-8'>
      <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} justify-between pt-4`}>
          <div className='flex-col'>
            <img
              src='./assets/Logo.png'
              alt='logo'
              className='w-[82px] h-[26px] mb-2'
              onClick={() => navigate('/')}
            />
            <button onClick={() => navigate(-1)}>
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
              {t('Step 02')}
            </p>
            <p className={`paragraph-01-regular text-primary-500 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>{i18n.language === 'Ar' ? '03/' : '/03'}</p>
          </div>
          <div className='bg-neutral-200 h-1 w-full' />
        </div>

        <div className='flex flex-col gap-2 mt-5'>
          <h1 className={`heading-03-semibold text-primary-900 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
            {t('Application form')}
          </h1>
          <p
            className={`paragraph-01-regular text-neutral-700 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {t(
              'Please fill the information below\nto help us assess your eligibility\nto Behja’s services.'
            )}
          </p>
        </div>

        <div className=' mt-10'>
          <div className='flex flex-col mb-5 gap-2'>
            <p className={`subparagraph-regular text-neutral-500 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
              {t('Are you a Saudi or a Non Saudi ?')}
            </p>
            <div className='flex items-start justify-between'>
              <div className='flex flex-col gap-1 w-[45%]'>
                <div
                  className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center  gap-2 border  px-4 py-3 rounded ${
                    errors.saudi
                      ? 'border-red-500'
                      : isSaudi === 'saudi'
                      ? 'border-primary-500'
                      : 'border-primary-200'
                  }`}
                >
                  <CheckBox
                    setChecked={setIsSaudi}
                    value={'saudi'}
                    cheCkedValue={isSaudi}
                  />
                  <p
                    className={`paragraph-02-regular  ${
                      errors.saudi
                        ? 'text-red-500'
                        : isSaudi === 'saudi'
                        ? 'text-shades-black'
                        : 'text-neutral-500'
                    } `}
                  >
                    {t('Saudi')}
                  </p>
                </div>
                {errors.saudi && (
                  <p className='text-red-500 paragraph-02-regular'>
                    {errors.saudi}
                  </p>
                )}
              </div>

              <div className='flex flex-col gap-1 w-[45%]'>
                <div
                  className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center  gap-2 border  px-4 py-3 rounded ${
                    errors.saudi
                      ? 'border-red-500'
                      : isSaudi === 'nonSaudi'
                      ? 'border-primary-500'
                      : 'border-primary-200'
                  }`}
                >
                  <CheckBox
                    setChecked={setIsSaudi}
                    value={'nonSaudi'}
                    cheCkedValue={isSaudi}
                  />
                  <p
                    className={`paragraph-02-regular  ${
                      errors.saudi
                        ? 'text-red-500'
                        : isSaudi === 'nonSaudi'
                        ? 'text-shades-black'
                        : 'text-neutral-500'
                    }`}
                  >
                    {t('Non Saudi')}
                  </p>
                </div>
                {errors.saudi && (
                  <p className='text-red-500 paragraph-02-regular'>
                    {errors.saudi}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-1 mb-5'>
            <div
              className={`flex items-center gap-2 border px-4 py-3 w-full rounded ${
                errors.Id
                  ? 'border-red-500'
                  : Id
                  ? 'border-primary-500'
                  : 'border-primary-200'
              }`}
            >
              <PiIdentificationCardThin className='text-neutral-500' />
              <input
                type='text'
                onChange={handleIdChange}
                value={Id}
                placeholder={t('National ID Number / Iqama Number')}
                className={`w-full border-none p-0 m-0 h-full outline-none text-shades-black ${i18n.language === 'Ar' ? 'text-end' : 'text-start'} ${
                  errors.Id ? 'placeholder-red-500' : 'placeholder-neutral-500'
                }`}
              />
            </div>
            {errors.Id && (
              <p className='text-red-500 paragraph-02-regular'>{errors.Id}</p>
            )}
          </div>

          <div className='flex flex-col mb-5 gap-2'>
            <p className={`subparagraph-regular text-neutral-500 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
              {t('Do you qualify for Sakani Program?')}
            </p>

            <div className='flex items-start justify-between'>
              <div className='flex flex-col gap-1 w-[45%]'>
                <div
                  className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center  gap-2 border  px-4 py-3 rounded ${
                    errors.qualify
                      ? 'border-red-500'
                      : isQualify === 'yes'
                      ? 'border-primary-500'
                      : 'border-primary-200'
                  }`}
                >
                  <CheckBox
                    setChecked={setIsQualify}
                    value={'yes'}
                    cheCkedValue={isQualify}
                  />
                  <p
                    className={`paragraph-02-regular  ${
                      errors.qualify
                        ? 'text-red-500'
                        : isQualify === 'yes'
                        ? 'text-shades-black'
                        : 'text-neutral-500'
                    }`}
                  >
                    {t('Yes')}
                  </p>
                </div>
                {errors.qualify && (
                  <p className='text-red-500 paragraph-02-regular'>
                    {errors.qualify}
                  </p>
                )}
              </div>

              <div className='flex flex-col gap-1 w-[45%]'>
                <div
                  className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center  gap-2 border  px-4 py-3 rounded ${
                    errors.qualify
                      ? 'border-red-500'
                      : isQualify === 'no'
                      ? 'border-primary-500'
                      : 'border-primary-200'
                  }`}
                >
                  <CheckBox
                    setChecked={setIsQualify}
                    value={'no'}
                    cheCkedValue={isQualify}
                  />
                  <p
                    className={`paragraph-02-regular  ${
                      errors.qualify
                        ? 'text-red-500'
                        : isQualify === 'no'
                        ? 'text-shades-black'
                        : 'text-neutral-500'
                    }`}
                  >
                    {t('No')}
                  </p>
                </div>
                {errors.qualify && (
                  <p className='text-red-500 paragraph-02-regular'>
                    {errors.qualify}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            className={`px-8 py-3 border border-primary-200 rounded paragraph-02-regular text-neutral-500 w-[35%] lg:w-[20%] ${
              isDirty ? 'bg-primary-500 text-shades-white' : 'text-neutral-500 '
            }`}
            onClick={handleSubmit}
          >
            {t('Next')}
          </button>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2 lg:flex-grow lg:h-screen'>
        <img
          src='./assets/step-2.png'
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

export default SecondApplicationForm;
