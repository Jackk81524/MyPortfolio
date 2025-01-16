import Logo from '../../../assets/images/J-logo.png';
import Achieve from '../../../assets/images/ss-achieve.png';
import Excercise from '../../../assets/images/ss-excercise.png';
import Login from '../../../assets/images/ss-login.png';
import Sets from '../../../assets/images/ss-sets.png';
import Social from '../../../assets/images/ss-social.png';
import Workouts from '../../../assets/images/ss-workouts.png';

import Picks from '../../../assets/images/picks.png';
import Standings from '../../../assets/images/standings.png';
import AddGame from '../../../assets/images/setgame.png';
import AddWeek from '../../../assets/images/setweek.png';
import SetResult from '../../../assets/images/setresult.png';


const projectData = {
    0: {
      title: [[
        'P', 'e', 'r', 's', 'o', 'n', 'a', 'l', ' ', 
        'W', 'e', 'b', 'p', 'a', 'g', 'e'], 
        ['a', 'n', 'd', ' ', 
        'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'
        ]],
      description: ["This project is my personal portfolio website, built to showcase my skills as a software developer and provide a dynamic platform to highlight my projects, experience, and achievements. This is actually the webpage you are on right now!", "This project was not only a demonstration of my technical abilities but also a valuable learning experience, as it was my first time working with React. The site demonstrates my proficiency in modern web development technologies, including responsive design, state management, and interactive components. It serves as both a professional portfolio and a practical example of my abilities to create clean, efficient, and user-friendly web applications."],
      technology: "JavaScript, ReactJS",
      repo: "https://github.com/Jackk81524/MyPortfolio",
      content: [Logo],
      labels: [""]
    },
    1: {
      title: [['S', 'w', 'e', 'a', 't', ' ', 'S', 'o', 'c', 'i', 'a', 'l']],
      description: ["Sweat Social is an innovative fitness application designed to help users effortlessly track their workouts, while leveraging social interaction to keep them motivated. Created as my Senior Design project at Purdue University, this app is built using Swift and SwiftUI to provide a smooth and intuitive user experience.", "Sweat Social enables users to log their workouts and track progress over time, while incorporating a gamified achievement system that rewards individuals for reaching fitness milestones. What sets Sweat Social apart is its emphasis on community, as users can share workout data with friends, fostering an environment that encourages accountability, engagement, and motivation through social pressure. Whether someone is a fitness enthusiast or just starting their journey, Sweat Social is designed to help users stay motivated and make their fitness routine more enjoyable.", "Due to the constraints of the Senior Design course, I was unable to deploy it to the App Store, but I've created an overview video, which you can watch by following the link below!"],
      technology: "Swift, SwiftUI",
      repo: "https://github.com/Jackk81524/sweat-social",
      video: "https://youtu.be/VA32JiA5KkE",
      content: [Login, Workouts, Excercise, Sets, Achieve, Social],
      labels: ["Authentication", "Workoout Management: Muscle Group", "Workoout Management: Exercise", "Workoout Management: Weights/Sets", "Gamified Achievements", "Social Activity"]
    },
    2: {
      title: [['F', 'o', 'o', 't', 'b', 'a', 'l', ' ', 'P', 'l', 'a', 'y', 'o', 'f', 'f', ' ', 'P', 'i', 'c', 'k', 's']],
      description: ["My friends and I have always been bonded by our love for football. Going back to elementary school, we'd eagerly pick the winners of playoff games and track the results on coloring paper. As we got older, the tradition continued—though it transitioned to a clunky Excel spreadsheet! It wasn't the smoothest, but it kept the fun alive. This year, I decided to combine my software development skills with that tradition and create an easy-to-use website that allows us to submit our picks and automatically track the standings, all while keeping the spirit of friendly competition alive.", "This website is built with a React frontend that provides a dynamic, responsive user experience, while the backend is powered by Node.js and Express, ensuring efficient handling of requests and seamless integration with the frontend. Data is securely stored and managed using Google Firestore, offering a scalable NoSQL database solution for real-time data synchronization and reliable performance.", "Note: This app is fully functional from a web browser, but the UI was designed to be used on a mobile device."],
      technology: "JavaScript, Node.js, Express.js, React",
      repo: "https://github.com/Jackk81524/PlayoffPicks",
      site: "https://playoff-picks-client.vercel.app/login",
      content: [Picks, Standings],
      labels: ["Picks Selection", "Standings"]
    }
  };
  
  export default projectData;