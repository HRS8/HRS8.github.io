import Footer from './footer.tsx'
import Card from './card.tsx'
import { ItemType } from './ts'
import { CHANNEL_TYPE_VS_COVER_IMAGE } from './constant';
import { CHANNEL_TYPES } from './ts/constants';
import React from 'react';
import { ThemeType } from './ts';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import defaultAvatar from './icons/avatar.jpeg';
import './css/skeleton.css';
import './css/components.css';
function Linktree({
  cardItems,
}: {
  cardItems: ItemType[];
}): JSX.Element {
    const dataTheme = document.body.getAttribute("data-theme");
    const [theme, setTheme] = React.useState<ThemeType>(
      (): ThemeType => (dataTheme === "light" ? "light" : "dark")
    );

    React.useEffect(() => {
      document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const handleSwitchTheme = () => {
      setTheme(isDark ? "light" : "dark");
    };

    const isDark = theme === "dark";
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return ( //add your fav song here
    <div className="coverb">
      <audio ref={audioRef} src="/FlyMeToTheMoon.mp3" id='my_audio' loop autoPlay hidden></audio>
      <div className={isDark ? "trans" : "trans1"}>
        <div>
          <div className="Header container">
            <div className="ten columns Header__inner">
              <article className={isDark ? "overlay" : "overlay11"}  onClick={handleAudioToggle}>
                <img src={defaultAvatar} alt="avatar" />
                &nbsp;&nbsp;&nbsp;
                <h2>
                  <b className={isDark ? "textcw" : "textcb"}>Harsha</b>
                  <span>{isPlaying?"🎶":"🔇"}</span>
                </h2>
              </article>
            </div>
            <div className={isDark ? "overlay1" : "overlay2"}>
              <button className="" onClick={handleSwitchTheme}>
                {isDark ? (
                  <SunIcon color="white" />
                ) : (
                  <MoonIcon color="rgba(0, 0, 0, 0.676)" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="container row">
          {cardItems.map((item, i: number) => {
            const converImage: string =
              item.image ??
              CHANNEL_TYPE_VS_COVER_IMAGE[item.type] ??
              CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
            return (
              <Card
                i={i}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                cover={converImage}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Linktree
