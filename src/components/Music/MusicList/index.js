import React from 'react';
import style from './MusicList.module.scss'

const MusicList = ({ songs, messageNoFound, onShowMore }) => {

   let onPause = (event) => {
      event.target.pause()
   }
   let onEnden = (e) => {
      if (e.target.parentNode.nextSibling) {
         e.target.parentNode.nextSibling.childNodes[3].play()
      } else {
         onShowMore()
         e.target.play()
      }
   }

   return (
      <div className={style.MusicList}>
         {songs.length !== 0
            ? <>
               {songs.map((song, i) => {
                  return (
                     <div className={style.item} key={i + '+' + song.id}>
                        <span className={style.num}>{i + 1 + '.'}</span>
                        <img src={song.artist.picture_small} alt="" />
                        <div className={style.description}>
                           <h4 className={style.title} title={song.title}>{song.title}</h4>
                           <p className={style.artistName} title={song.artist.name}>{song.artist.name}</p>
                        </div>
                        <audio controls onBlur={onPause} onEnded={onEnden}>
                           <source type="audio/mpeg" src={song.preview} />
                           <p>Ваш браузер не поддерживает аудио</p>
                        </audio>
                     </div>
                  )
               })
               }
            </>
            : <h4 className={style.noSongsText}>
               {messageNoFound
                  ? messageNoFound
                  : 'Введите в поиск название песни'
               }
            </h4>
         }

      </div>
   );
}

export default MusicList;
