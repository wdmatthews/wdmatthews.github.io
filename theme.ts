"use client";

import { createTheme } from "@mantine/core";
import { Lato } from 'next/font/google';
 
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  fontFamily: `${lato.style.fontFamily}, sans-serif`,
  headings: { fontFamily: `${lato.style.fontFamily}, sans-serif` },
});
