import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/pages/InitialPage');
  return null
}