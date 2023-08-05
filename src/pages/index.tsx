import HomePage from '@/components/homepage';
import Header from '../components/Header';
import PropertiesRender from '@/components/homepage/components/PropertiesRender';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='h-screen w-full bg-white-body flex flex-col relative'>
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}
