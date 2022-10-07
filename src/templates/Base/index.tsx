import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './styles';
import { GoTop } from '../../components/GoTop';
import { useRouter } from 'next/router';
import { ToggleTheme } from 'components/ToggleTheme';

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
          <form action="/search/" method="GET">
            <Styled.SearchInput
              type="search"
              placeholder="Buscar post"
              name="q"
              defaultValue={router.query.q}
            />
          </form>
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
