import * as React from 'react';
import ThemeContext, {themes} from '../context/theme-context';
console.log("Theme", themes)

type Props = {};

export default function ThemeToggleButton(props: Props) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={theme} >
      Toggle Theme
    </button>
  );
}