// pages/index.tsx yoki pages/home.tsx
// import { About, Directions, Footer, Help, Navbar, Species } from '@/components';
import { Navbar } from '@/components';
import Help from '@/components/help/help';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Darmon Travel</title>
      </Head>
      <Navbar />
      <Help/>
      {/* <Help />
      <Species />
      <About/>
      <Directions/> */}
    </div>
  );
};

export default Home;
