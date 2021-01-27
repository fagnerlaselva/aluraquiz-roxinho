/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz Curiosidades Nubank</title>
        <meta name="title" content="Quiz Curiosidades Nubank" />
        <meta name="description" content="Venha testar seus conhecimentos sobre o roxinho mais amado do Brasil" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-roxinho.vercel.app/" />
        <meta property="og:title" content="Quiz Curiosidades Nubank" />
        <meta property="og:description" content="Venha testar seus conhecimentos sobre o roxinho mais amado do Brasil" />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-roxinho.vercel.app/" />
        <meta property="twitter:title" content="Quiz Curiosidades Nubank" />
        <meta property="twitter:description" content="Venha testar seus conhecimentos sobre o roxinho mais amado do Brasil" />
        <meta property="twitter:image" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
