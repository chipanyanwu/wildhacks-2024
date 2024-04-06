import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to ToDo App</h1>
      <p>This is a simple website that will help you build new worlds!!</p>

      <ul>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/things">Things</Link></li>
        <li><Link href="/todopage">Todo Page</Link></li>
      </ul>


    </div>
  );
}
