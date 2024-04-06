import List from '../components/List';
import TopBar from '../components/TopBar';

const Courses = () => {

  const CourseList = ["Web Development", 
                      "Data Science", 
                      "Artificial Intelligence", 
                      "Cloud Computing"];
    return (
      <>
        <TopBar />
        <div>
          <List items={CourseList} />
        </div>
      </>
    );
  }

export default Courses;