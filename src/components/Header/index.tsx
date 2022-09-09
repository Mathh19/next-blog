import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  srcImg: string;
  title: string;
  description: string;
  showDescription?: boolean;
};

export const Header = ({
  srcImg,
  title,
  description,
  showDescription = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink link="/" srcImg={srcImg} text={`${title} - ${description}`} />
      {showDescription && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {title}
          </Heading>
          <p>{description}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
