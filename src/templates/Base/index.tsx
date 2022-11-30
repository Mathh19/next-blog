import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './styles';
import { GoTop } from '../../components/GoTop';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { ToggleTheme } from 'components/ToggleTheme';
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
  displaySearch?: boolean;
};

export const BaseTemplate = ({
  settings,
  children,
  displaySearch = true,
}: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu
        links={settings.data.attributes.menuLink}
        blogName={settings.data.attributes.blogName}
        logo={settings.data.attributes.logo.data.attributes.url}
      />
      <Styled.HeaderContainer>
        <Header
          title={settings.data.attributes.blogName}
          description={settings.data.attributes.blogDescription}
          srcImg={settings.data.attributes.logo.data.attributes.url}
        />
      </Styled.HeaderContainer>
      {displaySearch ? (
        <Styled.SearchContainer>
          <Styled.SearchInput
            type="search"
            placeholder="Buscar post"
            name="q"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={searchDisabled}
          />
          {searchDisabled ? (
            <Cancel
              className="search-cancel-icon"
              aria-label="Input disabled"
            />
          ) : (
            <CheckCircleOutline
              className="search-ok-icon"
              aria-label="Input-enabled"
            />
          )}
        </Styled.SearchContainer>
      ) : null}
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.footer} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
