import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeFinderFilter from '../components/HomeFinderFilter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HouseCard from '../components/HouseCard';
import Pagination from '../components/Pagination';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    imgSrc: './assets/Card-1.png',
    title: 'Aljazzira\nAppartement',
    initialDeposit: '3500 riyal',
    address: 'South Riyadh',
    monthlyRent: '15,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '2',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-2.png',
    title: 'Palm View\nApartments',
    initialDeposit: '3500 riyal',
    address: 'North Riyadh',
    monthlyRent: '13,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '3',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-3.png',
    title: 'Open\nVilla',
    initialDeposit: '10,000 riyal',
    address: 'North Riyadh',
    monthlyRent: '18,500 riyal',
    futureSavings: '20,000 riyal',
    bedNum: '6',
    bathNum: '4',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-1.png',
    title: 'Aljazzira\nAppartement',
    initialDeposit: '3500 riyal',
    address: 'South Riyadh',
    monthlyRent: '15,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '2',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-2.png',
    title: 'Palm View\nApartments',
    initialDeposit: '3500 riyal',
    address: 'North Riyadh',
    monthlyRent: '13,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '3',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-3.png',
    title: 'Open\nVilla',
    initialDeposit: '10,000 riyal',
    address: 'North Riyadh',
    monthlyRent: '18,500 riyal',
    futureSavings: '20,000 riyal',
    bedNum: '6',
    bathNum: '4',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-1.png',
    title: 'Aljazzira\nAppartement',
    initialDeposit: '3500 riyal',
    address: 'South Riyadh',
    monthlyRent: '15,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '2',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-2.png',
    title: 'Palm View\nApartments',
    initialDeposit: '3500 riyal',
    address: 'North Riyadh',
    monthlyRent: '13,000 riyal',
    futureSavings: '20,310 riyal',
    bedNum: '2',
    bathNum: '3',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-3.png',
    title: 'Open\nVilla',
    initialDeposit: '10,000 riyal',
    address: 'North Riyadh',
    monthlyRent: '18,500 riyal',
    futureSavings: '20,000 riyal',
    bedNum: '6',
    bathNum: '4',
    dimension: '6 x 7.5 m²',
  },
  {
    imgSrc: './assets/Card-3.png',
    title: 'Open\nVilla',
    initialDeposit: '10,000 riyal',
    address: 'North Riyadh',
    monthlyRent: '18,500 riyal',
    futureSavings: '20,000 riyal',
    bedNum: '6',
    bathNum: '4',
    dimension: '6 x 7.5 m²',
  },
];

const HomeFinder = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [bedNum, setBedNum] = useState();
  const [monthlyRent, setMonthlyRent] = useState();
  const [location, setLocation] = useState();
  const [futureValue, setFutureValue] = useState();
  const [rentDuration, setRentDuration] = useState();
  const [initialDeposit, setInitialDeposit] = useState();
  const [results, setResults] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Function to get the current items to display based on pagination
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return results.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    const filteredData = data.filter((card) => {
      // Filter based on the selected criteria
      if (
        (!bedNum || card.bedNum === bedNum) &&
        (!monthlyRent || checkMonthlyRent(card, monthlyRent)) &&
        (!location || card.address === location) &&
        (!futureValue || checkFutureValue(card, futureValue)) &&
        (!rentDuration || checkRentDuration(card, rentDuration)) &&
        (!initialDeposit || checkInitialDeposit(card, initialDeposit))
      ) {
        return true;
      }
      return false;
    });

    setResults(filteredData);
  };

  // Helper function to check monthly rent range
  const checkMonthlyRent = (card, selectedMonthlyRent) => {
    const monthlyRentNumber = parseInt(
      card.monthlyRent.replace(/[^0-9.-]+/g, ''),
      10
    );

    if (selectedMonthlyRent === '< 5000' && monthlyRentNumber < 5000) {
      return true;
    } else if (
      selectedMonthlyRent === '5001 - 10,000' &&
      monthlyRentNumber >= 5000 &&
      monthlyRentNumber <= 10000
    ) {
      return true;
    } else if (
      selectedMonthlyRent === '> 10,001' &&
      monthlyRentNumber > 10000
    ) {
      return true;
    }

    return false;
  };

  // Helper function to check future property value
  const checkFutureValue = (card, selectedFutureValue) => {
    const futureSavingsNumber = parseInt(
      card.futureSavings.replace(/[^0-9.-]+/g, ''),
      10
    );
    return futureSavingsNumber >= parseInt(selectedFutureValue, 10);
  };

  const checkRentDuration = (card, selectedRentDuration) => {
    if (selectedRentDuration === 'day' && card.rentalDuration === 'day') {
      return true;
    } else if (
      selectedRentDuration === 'week' &&
      card.rentalDuration === 'week'
    ) {
      return true;
    } else if (
      selectedRentDuration === 'month' &&
      card.rentalDuration === 'month'
    ) {
      return true;
    }

    return false;
  };

  // Helper function to check initial deposit
  const checkInitialDeposit = (card, selectedInitialDeposit) => {
    const initialDepositNumber = parseInt(
      card.initialDeposit.replace(/[^0-9.-]+/g, ''),
      10
    );

    if (selectedInitialDeposit === '< 5000' && initialDepositNumber < 5000) {
      return true;
    } else if (
      selectedInitialDeposit === '5001 - 10,000' &&
      initialDepositNumber >= 5000 &&
      initialDepositNumber <= 10000
    ) {
      return true;
    } else if (
      selectedInitialDeposit === '> 10,001' &&
      initialDepositNumber > 10000
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className='flex flex-col items-center justify-center bg-primary-50'>
      <NavBar fixed={false} />

      <div className='relative w-full'>
        <div
          className={`flex flex-col ${
            i18n.language === 'Ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } justify-between w-full`}
        >
          <div
            className={`flex flex-col ${
              i18n.language === 'Ar' ? 'items-end' : 'items-start'
            } pl-4 ${
              i18n.language === 'Ar' ? 'lg:pr-[12.5%]' : 'lg:pl-[12.5%]'
            }`}
          >
            <button className='mb-10' onClick={() => navigate('/')}>
              <img src='./assets/ArrowLeft.svg' alt='arrow' />
            </button>
            <p
              className={`display-02-bold text-primary-900 ${
                i18n.language === 'Ar' ? 'text-end' : 'text-start'
              } whitespace-pre-line`}
            >
              {t('Search for\nyour future home')}
            </p>
            <p
              className={`paragraph-03-regular text-neutral-500 ${
                i18n.language === 'Ar' ? 'text-end' : 'text-start'
              } whitespace-pre-line`}
            >
              {t(
                'Share your vision of your dream home, and we’ll\ngive you some options to look at.'
              )}
            </p>
          </div>
          <div className='relative w-full lg:w-[50%]'>
            <div
              className={`absolute bg-gradient-to-b h-full  lg:bg-gradient-to-t from-primary-50 via-transparent to-transparent w-full lg:h-1/2 bottom-0`}
            />
            <div
              className={`absolute bg-gradient-to-t ${
                i18n.language === 'Ar'
                  ? 'lg:bg-gradient-to-l'
                  : 'lg:bg-gradient-to-r'
              } from-primary-50 via-transparent to-transparent w-full h-full`}
            />
            <img
              src='./assets/homefinder.png'
              alt='behja finder'
              className='h-[615px] object-cover w-full'
            />
          </div>
        </div>

        <div className='absolute bottom-10 flex items-center justify-center w-full'>
          <HomeFinderFilter
            setFilterData={{
              setBedNum,
              setMonthlyRent,
              setLocation,
              setFutureValue,
              setRentDuration,
              setInitialDeposit,
            }}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-center lg:w-[75%] mb-5'>
        {getCurrentItems().map((result, id) => (
          <div className='w-1/1 lg:w-1/3 p-4' key={id}>
            <HouseCard cardInfos={result} />
          </div>
        ))}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={results.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <Footer />
    </div>
  );
};

export default HomeFinder;
