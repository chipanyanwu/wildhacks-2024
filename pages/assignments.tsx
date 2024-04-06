import List from '../components/List';
// import '../styles/globals.css'



export default function Courses() {

  const CourseList = ["Web Development", 
                      "Data Science", 
                      "Artificial Intelligence", 
                      "Cloud Computing"];
    return (
      <div>
       <List items={CourseList} />
      </div>
    );
  }