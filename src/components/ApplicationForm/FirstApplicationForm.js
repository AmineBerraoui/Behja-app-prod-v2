import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PiUser } from 'react-icons/pi';
import { GoMail } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../App';

const FirstApplicationForm = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const { data, setData } = useMyContext();

  const [isDirty, setIsDirty] = useState(false);
  const [firstName, setFirstName] = useState(data?.firstName || '');
  const [lastName, setLastName] = useState(data?.lastName || '');
  const [email, setEmail] = useState(data?.email || '');
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
  });
  const [currentlang, setCurrentLang] = useState(i18n.language);

  const validateInputs = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required.';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }

    return newErrors;
  };

  console.log(data);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: null });
    if (firstName && lastName && email) setIsDirty(true);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: null });
    if (firstName && lastName && email) setIsDirty(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: null });
    if (firstName && lastName && email) setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setData({
        ...data,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      if (isDirty) navigate('/secondapplicationform');
    }
  };

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
    <div className={`min-h-screen flex justify-center ${
      i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
    }`}>
      <div className='flex flex-col px-4 pt-10 gap-4  lg:w-[50%] lg:gap-0 lg:px-24 lg:pb-8'>
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
              {t('Step 01')}
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

        <div className='mt-10'>
          <div className='flex flex-col justify-between items-start gap-5 mb-5 lg:flex-row'>
            <div className='flex flex-col gap-1'>
              <div
                className={`flex items-center gap-2 border rounded px-4 py-3 ${
                  errors.firstName
                    ? 'border-red-500'
                    : firstName
                    ? 'border-primary-500'
                    : 'border-primary-200'
                }`}
              >
                <PiUser
                  className={`${
                    errors.firstName ? 'text-red-500' : 'text-neutral-500'
                  }`}
                />
                <input
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder={t('First Name')}
                  className={`border-none p-0 m-0 h-full outline-none text-shades-black ${
                    errors.firstName
                      ? 'placeholder-red-500'
                      : 'placeholder-neutral-500'
                  } ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
                />
              </div>
              {errors.firstName && (
                <p className='text-red-500 paragraph-02-regular'>
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <div
                className={`flex items-center gap-2 border  rounded px-4 py-3 ${
                  errors.lastName
                    ? 'border-red-500'
                    : lastName
                    ? 'border-primary-500'
                    : 'border-primary-200'
                }`}
              >
                <PiUser
                  className={`${
                    errors.lastName ? 'text-red-500' : 'text-neutral-500'
                  }`}
                />
                <input
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder={t('Last Name')}
                  className={`border-none p-0 m-0 h-full outline-none text-shades-black ${
                    errors.lastName
                      ? 'placeholder-red-500'
                      : 'placeholder-neutral-500'
                  } ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
                />
              </div>
              {errors.lastName && (
                <p className='text-red-500 paragraph-02-regular'>
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col gap-1 mb-5'>
            <div
              className={`flex items-center gap-2 border  rounded px-4 py-3 ${
                errors.email
                  ? 'border-red-500'
                  : email
                  ? 'border-primary-500'
                  : 'border-primary-200'
              } ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
            >
              <GoMail
                className={`${
                  errors.email ? 'text-red-500' : 'text-neutral-500'
                }`}
              />
              <input
                type='email'
                name='Email'
                value={email}
                onChange={handleEmailChange}
                placeholder={t('Email')}
                className={`border-none p-0 m-0 w-full h-full outline-none text-shades-black ${
                  errors.email
                    ? 'placeholder-red-500'
                    : 'placeholder-neutral-500'
                } ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
              />
            </div>
            {errors.email && (
              <p className='text-red-500 paragraph-02-regular'>
                {errors.email}
              </p>
            )}
          </div>
          <button
            className={`px-8 py-3 border border-primary-200 rounded  ${
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
          src='./assets/step-1.jpeg'
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

export default FirstApplicationForm;
