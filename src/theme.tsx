import { createTheme } from '@mui/material/styles';

// Modern Marketing Agency Color Palette
const colors = {
  primary: {
    main: '#1a1a2e', // Deep charcoal
    light: '#2d2d44',
    dark: '#0f0f1a',
  },
  secondary: {
    main: '#4a7c59', // Sage green
    light: '#6a9c79',
    dark: '#2a5c39',
  },
  accent: {
    main: '#e8a838', // Rich amber/gold
    light: '#f5c166',
    dark: '#c88818',
  },
  background: {
    default: '#fafafa',
    paper: '#ffffff',
    dark: '#1a1a2e',
  },
  text: {
    primary: '#1a1a2e',
    secondary: '#666666',
    light: '#ffffff',
  },
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.accent.main} 0%, ${colors.accent.dark} 100%)`,
          color: '#ffffff',
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.accent.light} 0%, ${colors.accent.main} 100%)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export { colors };
export default theme;
