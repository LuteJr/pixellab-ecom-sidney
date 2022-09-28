import Head from 'next/head';
import { Layout } from '../layouts';

const contactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
        <main>hello from nextpm</main>
      </Layout>
    </>
  );
};

// este obligatoriu sa returnam un default export
//pentru fiecare pagina

export default contactPage;
