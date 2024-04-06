import List from '../components/List';
import TopBar from '../components/TopBar';
import Link from 'next/link';

const Courses = () => {

  const CourseList = ["Web Development", 
                      "Data Science", 
                      "Artificial Intelligence", 
                      "Cloud Computing"];
    return (
      <>
        <TopBar />
        <div>
        <Link href="/tasks"> Assignments</Link>
          <List items={CourseList} />
        </div>
      </>
    );
  }

export default Courses;