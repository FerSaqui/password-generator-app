import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { themeApp } from './themeApp';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ themeApp }>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            { children }
        </ThemeProvider>
    );
}