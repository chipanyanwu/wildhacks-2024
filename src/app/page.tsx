import Link from 'next/link';
import TopBar from '../../components/TopBar';

const Home = () => {
  return (
    <>
      <TopBar />
        <div>
          <h1>Welcome to ToDo App</h1>
          <p>This is a simple website that will help you build new worlds!!</p>
          <ul>
            <li><Link href="/courses">Courses</Link></li>
          </ul>
      </div>
    </>
    
  );
}

export default Home;
