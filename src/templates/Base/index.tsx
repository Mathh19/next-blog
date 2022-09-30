import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from 'shared-types/settings-strapi';
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

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
