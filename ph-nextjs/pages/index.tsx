import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Htag, Pagination } from '../components';
import { HomePageComponent } from "../page_components";

const Home: NextPage = () => {
  const [state, setState] = useState<"active" | "disactive">("active");
  const [n, setN] = useState(0);

  return (
    <>
      <HomePageComponent />
      <Htag />
      <div>
        {new Array(5).fill(0).map((a, i) => {
          return (
            <Pagination
              state={n == i ? "active" : "disactive"}
              onClick={() => {
                setN(i);
              }}
            />
          );
        })}
      </div>

    </>
  );
};

export default Home;
