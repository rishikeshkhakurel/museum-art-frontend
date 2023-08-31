import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  *{
    font-family: 'Nunito Sans', sans-serif;
  }

  :root{
    --black: #000;
    --white: #fff;

    --primary-900:#0C4A6E;
    --primary-800:#075985;
    --primary-700:#0369A1;
    --primary-600:#0284C7;
    --primary-500:#0EA5E9;
    --primary-400:#38BDF8;
    --primary-300:#7DD3FC;
    --primary-200:#BAE6FD;
    --primary-100:#E0F2FE;
    --primary-50:#F0F9FF;

    --gray-900:#0F172A;
    --gray-800:#1E293B;
    --gray-700:#334155;
    --gray-600:#475569;
    --gray-500:#64748B;
    --gray-400:#94A3B8;
    --gray-300:#CBD5E1;
    --gray-200:#E2E8F0;
    --gray-100:#F1F5F9;
    --gray-50:#F8FAFC;

    --red-900:#7F1D1D;
    --red-800:#991B1B;
    --red-700:#B91C1C;
    --red-600:#DC2626;
    --red-500:#EF4444;
    --red-400:#F87171;
    --red-300:#FCA5A5;
    --red-200:#FECACA;
    --red-100:#FEE2E2;
    --red-50:#FEF2F2;

    --green-900:#14532D;
    --green-800:#166534;
    --green-700:#15803D;
    --green-600:#16A34A;
    --green-500:#22C55E;
    --green-400:#4ADE80;
    --green-300:#86EFAC;
    --green-200:#BBF7D0;
    --green-100:#DCFCE7;
    --green-50:#FOFDF4;

    --yellow-900:#713F12;
    --yellow-800:#854D0E;
    --yellow-700:#A16207;
    --yellow-600:#CA8A04;
    --yellow-500:#EAB308;
    --yellow-400:#FACC15;
    --yellow-300:#FDE047;
    --yellow-200:#FEF08A;
    --yellow-100:#FEF9C3;
    --yellow-50:#FEFCE8;
  }

  p{
    margin: 0;
  }
  a{
    color: inherit;
    text-decoration:none;
  }
  
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    font-weight: 400;
  }
  
  h1{
    font-size: 36px;
    line-height: 40px;
  }
  
  h2{
    font-size: 24px;
    line-height: 32px;
  }

  h3{
    font-size: 16px;
    line-height: 24px;
  }

  .body-small {
    font-size: 12px;
    line-height: 18px;
  }

  .extra-bold{
    font-weight: 800;
  }

  .extra-bold-title{
    line-height: 20px; //apply to title
  }

  .body-regular {
    font-size: 14px;
    line-height: 20px;
  }

  .semi-bold{
    font-weight: 600;
  }

  .icon{
    color: var(--gray-400);
  }

  //custom scrool bar 
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
`;

export default GlobalStyle;
