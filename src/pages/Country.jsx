import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

// const [countryParams, setCountryParams] = useParams();
export const Country = () => {
  const { countryId } = useParams();
  const [countryArr, setCountryArr] = useState({});
  useEffect(() => {
    fetchCountry(countryId).then(data => {
      setCountryArr(data);
    });
  }, [countryId]);
  console.log(countryId);
  const { flag, capital, countryName, id, languages, population } = countryArr;

  return (
    <Section>
      <Container>
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
