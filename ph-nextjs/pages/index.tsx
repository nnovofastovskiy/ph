import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Htag } from '../components';
import { HomePageComponent } from "../page_components";

const Home: NextPage = () => {
  return (
    <>
      <HomePageComponent />
      <Htag />
    </>
  );
};

export default Home;
