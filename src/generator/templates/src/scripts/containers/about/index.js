import Loading from '../../util/loading';
import Loadable from 'react-loadable';

const AboutAPP = Loadable({
  loader: () => import('./app'),
  loading: Loading,
});

export default AboutAPP;