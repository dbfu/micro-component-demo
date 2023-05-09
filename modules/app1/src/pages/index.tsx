import { MicroComponent } from '@/component/mocro-component';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to app1!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <MicroComponent name='app2' componentName='demo' params={{ name: '666', text: 'hello' }} />
    </div>
  );
}
