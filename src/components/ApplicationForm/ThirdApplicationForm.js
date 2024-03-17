import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../DropDown';
import { PiWallet, PiPersonArmsSpread } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../App';
import { useEffect } from 'react';

const Currency = ['SAR', '$'];
const jobsector = ['Public', 'Private', 'Self-Employed'];

const ThirdApplicationForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { data, setData } = useMyContext();
  const [isDirty, setIsDirty] = useState(false);
  const [currency, setCurrency] = useState(data?.currency);
  const [jobSector, setJobSector] = useState(data?.jobSector);
  const [occupation, setOccupation] = useState(data?.occupation || '');
  const [netIncome, setNetIncome] = useState(data?.netIncome || '');
  const [errors, setErrors] = useState({
    jobSector: null,
    occupation: null,
    currency: null,
    netIncome: null,
  });
  const [currentlang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    if (currency && jobSector && occupation && netIncome) setIsDirty(true);
  }, [currency, jobSector, occupation, netIncome]);

  const validateInputs = () => {
    const newErrors = {};

    if (!jobSector) {
      newErrors.jobSector = 'Please fill this field.';
    }

    if (!occupation.trim()) {
      newErrors.occupation = 'Please fill this field.';
    }

    if (!currency) {
      newErrors.currency = 'Please fill this field.';
    }

    if (!netIncome.trim()) {
      newErrors.netIncome = 'Please fill this field.';
    }

    return newErrors;
  };

  const handleChangeNetIncome = (e) => {
    setNetIncome(e.target.value);
    setErrors({ ...errors, netIncome: null });
  };

  const handleChangeOccupation = (e) => {
    setOccupation(e.target.value);
    setErrors({ ...errors, occupation: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setData({
        ...data,
        currency: currency,
        jobSector: jobSector,
        occupation: occupation,
        netIncome: netIncome,
      });
      if (isDirty) navigate('/applicationformanalyze');
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

  const navigateBack = () => {
    navigate(-1);
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
              {t('Step 03')}
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

        <div className='flex flex-col gap-5 mt-10'>
          <div className='flex flex-col gap-1'>
            <DropDown
              options={jobsector}
              width={'100%'}
              placeholder={t('Job Sector')}
              src={'./assets/Read.svg'}
              value={data?.jobSector}
              setData={setJobSector}
            />
            {errors.jobSector && (
              <p className='text-red-500 paragraph-02-regular'>
                {errors.jobSector}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <div
              className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 border rounded px-4 py-3 ${
                errors.occupation
                  ? 'border-red-500'
                  : occupation
                  ? 'border-primary-500'
                  : 'border-primary-200'
              }`}
            >
              <PiPersonArmsSpread
                className={`${
                  errors.occupation ? 'text-red-500' : 'text-neutral-500'
                }`}
              />
              <input
                type='text'
                placeholder={t('Occupation')}
                value={occupation}
                onChange={handleChangeOccupation}
                className={`border-none p-0 m-0 h-full w-full outline-none text-shades-black ${i18n.language === 'Ar' ? 'text-end' : 'text-start'} ${
                  errors.occupation
                    ? 'placeholder-red-500'
                    : 'placeholder-neutral-500'
                }`}
              />
            </div>
            {errors.occupation && (
              <p className='text-red-500 paragraph-02-regular'>
                {errors.occupation}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <DropDown
              options={Currency}
              width={'100%'}
              placeholder={t('Currency')}
              src={'./assets/Coins.svg'}
              value={data?.currency}
              setData={setCurrency}
            />
            {errors.currency && (
              <p className='text-red-500 paragraph-02-regular'>
                {errors.currency}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <div
              className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 border rounded px-4 py-3 ${
                errors.netIncome
                  ? 'border-red-500'
                  : netIncome
                  ? 'border-primary-500'
                  : 'border-primary-200'
              }`}
            >
              <PiWallet
                className={`${
                  errors.netIncome ? 'text-red-500' : 'text-neutral-500'
                }`}
              />
              <input
                type='text'
                placeholder={t('Net income/year')}
                value={netIncome}
                onChange={handleChangeNetIncome}
                className={`border-none p-0 m-0 h-full outline-none text-shades-black ${i18n.language === 'Ar' ? 'text-end' : 'text-start'} ${
                  errors.netIncome
                    ? 'placeholder-red-500'
                    : 'placeholder-neutral-500'
                }`}
              />
            </div>
            {errors.netIncome && (
              <p className='text-red-500 paragraph-02-regular'>
                {errors.netIncome}
              </p>
            )}
          </div>

          <button
            className={`px-8 py-3 border border-primary-200 rounded paragraph-02-regular text-neutral-500 w-full lg:w-[45%] ${
              isDirty ? 'bg-primary-500 text-shades-white' : 'text-neutral-500 '
            }`}
            onClick={handleSubmit}
          >
            {t('Analyze my eligibility')}
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

export default ThirdApplicationForm;
