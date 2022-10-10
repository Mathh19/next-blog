import * as Styled from './styles';
import { useState, useContext, useEffect } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'dark') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((state) => !state);
    setTheme(checked ? 'dark' : 'default');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
