import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from 'shared-typed/settings-strapi';
import * as Styled from './styles';
import { GoTop } from '../../components/GoTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.attributes.menuLink}
        blogName={settings.attributes.blogName}
        logo={settings.attributes.logo.attributes.url}
      />

      <Styled.HeaderContainer>
        <Header
          title={settings.attributes.blogName}
          description={settings.attributes.blogDescription}
          srcImg={settings.attributes.logo.attributes.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.attributes.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
