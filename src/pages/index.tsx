import HomePage from '@/components/homepage';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className='h-screen w-full bg-white-body flex flex-col relative'>
      <Header />
      <HomePage />
    </main>
  )
}
