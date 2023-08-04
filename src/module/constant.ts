import website from '../assets/website.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.jpg';
import youtube from '../assets/youtube.jpeg';
import github from '../assets/github.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import coursera from '../assets/coursera.png';
import whatsapp from '../assets/Whatsapp.jpg';

import { CHANNEL_TYPES } from './ts/constants';

export const CHANNEL_TYPE_VS_COVER_IMAGE = {
  [CHANNEL_TYPES.WEBSITE]: website,
  [CHANNEL_TYPES.INSTAGRAM]: instagram,
  [CHANNEL_TYPES.LINKEDIN]: linkedin,
  [CHANNEL_TYPES.YOUTUBE]: youtube,
  [CHANNEL_TYPES.COURSERA]: coursera,
  [CHANNEL_TYPES.GITHUB]: github,
  [CHANNEL_TYPES.WHATSAPP]: whatsapp,
  [CHANNEL_TYPES.TELEGRAM]: telegram,
  [CHANNEL_TYPES.TWITTER]: twitter,
};
