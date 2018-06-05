import Loading from '../../util/loading';
import Loadable from 'react-loadable';

const HomeAPP = Loadable({
  loader: () => import('./app'),
  loading: Loading,
});

export default HomeAPP;