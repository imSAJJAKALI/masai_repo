// import Courses ,Title and UserCard here

// keep a user object with mentioned properties and pass down to UserCard as prop
import Courses from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

export default function App() {
  return <div style={{border:'1px solid teal',textAlign:''}}>
  <Title/>
  <UserCard avatar='https://dummyimage.com/200x200.jpg/ff4444/ffffff' name='Chrises' address='1018 Sachs Trail' posts='1048' followers='2345'/>
  <Courses/>
  </div>;
}

