import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
export const Sidebar = () =>{

  const name = "John Doe"
  const email = "johndoe@gmail.com"
  const tabs = [
    {
      tabName: "Dashboard",
      to: "dashboard"
    },
    {
      tabName: "Courses",
      to: "courses"
    },
    {
      tabName: "Certificates",
      to: "certificates"
    },
    {
      tabName: "Articles",
      to: "articles"
    },
    {
      tabName: "Quizzes",
      to: "quizzes"
    }
  ]

  return <div className="sidebar">
    <div className="navigation">
      {tabs.map((item, index)=>(
        <Link key={index} to={item.to}>{item.tabName}</Link>
      ))}
    </div>

    <div className="footer">
      <div className='user'>
        <Avatar src='/images/avatar-img.png'/>
        <div className='user-info'>
          <p className='name-text'>
            {name}
          </p>
          <p className='email-text'>
            {email}
          </p>
        </div>
      </div>
      <Divider orientation="horizontal" style={{backgroundColor: "white"}} />
      <div className='options'>
        <a>
          Settings
        </a>
        <a>
          Sign out
        </a>
      </div>
    </div>


  </div>
}