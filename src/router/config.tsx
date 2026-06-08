
import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/page';
import Datenschutz from '../pages/datenschutz/page';
import Impressum from '../pages/impressum/page';
import LeistungenPage from '../pages/leistungen/page';
import LeistungDetailPage from '../pages/leistungen/detail';
import ProjektePage from '../pages/projekte/page';
import UeberUnsPage from '../pages/ueber-uns/page';
import FaqPage from '../pages/faq/page';
import KontaktPage from '../pages/kontakt/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/leistungen',
    element: <LeistungenPage />,
  },
  {
    path: '/leistungen/:slug',
    element: <LeistungDetailPage />,
  },
  {
    path: '/projekte',
    element: <ProjektePage />,
  },
  {
    path: '/ueber-uns',
    element: <UeberUnsPage />,
  },
  {
    path: '/faq',
    element: <FaqPage />,
  },
  {
    path: '/kontakt',
    element: <KontaktPage />,
  },
  {
    path: '/datenschutz',
    element: <Datenschutz />,
  },
  {
    path: '/impressum',
    element: <Impressum />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;