import { LinksMenuProps } from 'components/Menu';
import { ImageStrapi } from './strapi-image';

export type SettingsStrapi = {
  data: {
    id: string;
    attributes: {
      blogName: string;
      blogDescription: string;
      logo: ImageStrapi;
      menuLink: LinksMenuProps[];
      footer: string;
    };
  };
};
