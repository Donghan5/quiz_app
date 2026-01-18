import { Outlet } from 'react-router-dom';
import { Header } from './Header';
export const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col">
      <Header />
      <main className="w-full pt-20">
        <Outlet />
      </main>
    </div>
  )
}
