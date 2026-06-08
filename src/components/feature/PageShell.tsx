import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Seo from '../seo/Seo';

type PageShellProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  children: ReactNode;
  className?: string;
};

export default function PageShell({
  title,
  description,
  path,
  image,
  children,
  className = '',
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Seo title={title} description={description} path={path} image={image} />
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
}
