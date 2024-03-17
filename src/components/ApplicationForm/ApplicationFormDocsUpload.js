import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PiFiles } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { PiFilePdfDuotone } from 'react-icons/pi';
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';

const ApplicationFormDocsUpload = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [isFinish, setIsFinish] = useState(false);
  const [currentlang, setCurrentLang] = useState(i18n.language);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected file here, you can upload it or do further processing
      setFile([...file, selectedFile]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    if (selectedFile) {
      // Handle the dropped file here, you can upload it or do further processing
      setFile([...file, selectedFile]);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);
  };

  const preventDefault = (event) => {
    event.preventDefault();
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
    <div className='min-h-screen flex justify-center flex-row'>
      <div className='flex flex-col px-4 pt-10 gap-4 lg:w-[50%] lg:gap-0 lg:px-24 lg:pb-8'>
        <div className='flex flex-row justify-between pt-4'>
          <div className='flex-col'>
            <img
              src='./assets/Logo.png'
              alt='logo'
              className='w-[82px] h-[26px] mb-2'
              onClick={() => navigate('/')}
            />
            <button
              onClick={() => navigate(-1)}
              className={`${isFinish ? 'hidden' : 'block'}`}
            >
              <img src='./assets/ArrowLeft.svg' alt='arrow' />
            </button>
          </div>
          <p onClick={handleChangeLang}>
            {currentlang === 'Ar' ? 'عربي' : 'English'}
          </p>
        </div>

        {isFinish ? (
          <div className='flex flex-col items-start self-center justify-center mt-28 gap-5'>
            <div className='flex flex-col gap-2 mt-5'>
              <h1
                className='heading-03-semibold text-primary-900'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('We have received\nyour documents!')}
              </h1>
              <p
                className='paragraph-01-regular text-neutral-700'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(
                  'A Behja’s purchase assistant will reach out\nto you shortly. Thank you!'
                )}
              </p>
            </div>
            <button
              className='text-shades-white px-8 py-3 bg-primary-500'
              onClick={() => navigate('/')}
            >
              {t('Back Home')}
            </button>
          </div>
        ) : (
          <>
            {' '}
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
                {t('Upload documents')}
              </h1>
              <p
                className={`paragraph-01-regular text-neutral-700 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(
                  'You are pre-qualified. We will require you to submit\nproof documents to support your application. '
                )}
              </p>
            </div>
            <div className='bg-neutral-50 self-center mt-5 px-8 py-8 w-[80%]'>
              <div
                className='flex flex-col items-center justify-center gap-2 p-4 border border-primary-200 border-dashed rounded cursor-pointer'
                onDrop={handleDrop}
                onDragOver={preventDefault}
                onClick={() => {
                  document.getElementById('fileInput').click();
                }}
              >
                <input
                  type='file'
                  id='fileInput'
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <PiFiles className='w-8 h-8' />
                <p
                  className='paragraph-01-regular text-primary-500 text-center'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t('Drag and drop\nor browse to choose a file')}
                </p>
              </div>
              {file ? (
                <div className='mt-4'>
                  <div className='flex items-center justify-between'>
                    <p className='subparagraph-regular text-neutral-400'>
                      {t(`${file.length} of 3 uploaded`)}
                    </p>
                    <button className='subparagraph-regular text-neutral-600'>
                      {t('cancel')}
                    </button>
                  </div>
                  <div className='mt-4'>
                    {file.map((data, i) => (
                      <div
                        className='flex items-center justify-between my-3'
                        key={i}
                      >
                        <div className='flex items-center'>
                          <PiFilePdfDuotone className='text-primary-500' />
                          <p className='subparagraph-regular text-shades-black'>
                            {data.name}
                          </p>
                        </div>
                        <div className='flex items-center gap-2'>
                          <AiOutlineCheck className='text-primary-500' />
                          <button onClick={() => handleDeleteFile(i)}>
                            <AiOutlineCloseCircle />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <button
                className={`${
                  file.length < 3 ? 'hidden' : 'flex'
                } py-3 px-8  bg-primary-500 text-shades-white rounded`}
                onClick={() => setIsFinish(true)}
              >
                {t('Finish')}
              </button>
            </div>
          </>
        )}
      </div>

      <div className='hidden relative lg:block lg:w-1/2 lg:flex-grow lg:h-screen'>
        <div className='blurred-div flex flex-col items-center absolute right-[25%] top-[25%]'>
          <p className='heading-03-semibold text-shades-white'>
            {t('List of documents')}
          </p>
          <div className='mt-10 flex flex-col  gap-8'>
            <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-start  gap-5`}>
              <p
                className='paragraph-03-semibold text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Copy of passport\nor national ID')}
              </p>
              <p
                className='paragraph-03-regular text-start text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Valid,  Picture\nand text highly\nvisible')}
              </p>
            </div>
            <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-start justify-between gap-5`}>
              <p
                className='paragraph-03-semibold text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Employer letter')}
              </p>
              <p
                className='paragraph-03-regular text-start text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Signed, Stamped')}
              </p>
            </div>
            <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-start justify-between gap-5`}>
              <p
                className='paragraph-03-semibold text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Bank statements')}
              </p>
              <p
                className='paragraph-03-regular text-start text-shades-white'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('Bank statements\nof the last six\n(06) months')}
              </p>
            </div>
          </div>
        </div>
        <img
          src='./assets/step-3.png'
          alt='behja'
          className='w-full h-full object-cover'
        />
        <img
          src='./assets/LogoSvg.svg'
          className='absolute bottom-0 left-[50%]'
          alt='behja'
        />
      </div>
    </div>
  );
};

export default ApplicationFormDocsUpload;
