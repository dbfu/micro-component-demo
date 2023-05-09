import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/index">index</Link>
        </li>
        <li>
          <Link to="/app1">app1</Link>
        </li>
        <li>
          <Link to="/app2">app2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
