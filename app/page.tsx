// app/page.tsx
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <Head>
        <title>Welcome to my Next.js app</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Hi, My name is Alorni, Welcome!</h1>
        <div className="grid grid-cols-2 gap-4">
          <img src="/dog1.jpg" alt="Dog 1" className="rounded-lg shadow-md" />
          <img src="/dog2.jpg" alt="Dog 2" className="rounded-lg shadow-md" />
          <img src="/dog3.jpg" alt="Dog 3" className="rounded-lg shadow-md" />
          <img src="/dog4.jpg" alt="Dog 4" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Home;

