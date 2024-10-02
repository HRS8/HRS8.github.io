import './App.css'
import Linktree from './module/linktree'
import { CHANNEL_TYPES } from "./module/ts/constants";

const items = [
  {
    title: 'Website',
    subtitle: 'Look at my work!',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://hrs8.tech/Portfolio/', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '#Meri Jaan',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/HRS8', //Github Profile link
  },
  {
    title: 'Coursersa',
    subtitle: '#NeverSettle',
    type: CHANNEL_TYPES.COURSERA,
    link: 'https://www.coursera.org/user/9ccd54502e76273a7253baa3366b7237', // Dribbble profile link
  },
  {
    title: 'LinkedIn',
    subtitle: 'Know more about my profession 👨‍💼',
    type: CHANNEL_TYPES.LINKEDIN,
    link: 'https://www.linkedin.com/in/harshithvallabhaneni/', // linkedin
  },
  {
    title: 'Blog',
    subtitle: 'I believe in small wins!',
    type: CHANNEL_TYPES.Blog,
    link: 'https://blog.hrs8.tech/Portfolio/', //your personal website or portfolio  link
  },
  {
    title: 'Telegram',
    subtitle: '#AOSP Creeps😎',
    type: CHANNEL_TYPES.TELEGRAM,
    link: 'https://telegram.me/mono_legend', //Telegram Pofile
  },
  {
    title: 'Instagram',
    subtitle: '#not much here',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://instagram.com/itsHRS8', //instagram profile link
  },
  {
    title: 'WhatsApp',
    subtitle: 'DM or Death',
    type: CHANNEL_TYPES.WHATSAPP,
    link: 'https://api.whatsapp.com/send/?phone=%2B919963670263&text&type=phone_number&app_absent=0',
  },
  {
    title: 'Twitter',
    subtitle: 'Lets fight😉',
    type: CHANNEL_TYPES.TWITTER,
    link: 'https://twitter.com/itsHRS8', // twitter profile link
  },
  {
    title: 'YTM Playlists',
    subtitle: 'SAPAKARIBE TO ME😪',
    type: CHANNEL_TYPES.YOUTUBE,
    link: 'https://music.youtube.com/channel/UCoJSvGBU-2p7-MMXTD2JuQA', //youtube channel link
  },
];

function App() {

  return (
    <div>
      <Linktree cardItems={items} />
    </div>
  )
}

export default App
