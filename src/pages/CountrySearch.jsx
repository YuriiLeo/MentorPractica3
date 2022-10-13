import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import {fetchByRegion} from '../service/country-service'



export const CountrySearch = () => {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchByRegion(query).then(data => setCountries(data))
  }, [query]);

  const onHandleSubmit = value => {
  setQuery(value)
}

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
