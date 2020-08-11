import React from 'react';
import style from './Settings.module.scss'
import { BgColorsOutlined } from '@ant-design/icons';


const Setting = (props) => {
   
   let onChoiceColor = (e) => {
      props.setColorThemeApp(e.target.value)
   }

   return (
      <div className={style.setting} >
         <h3>Настройки</h3>
         <div className={style.choiceColor}>
            <p>Цвет шапки и сайдбара:</p>
            <BgColorsOutlined style={{fontSize: '20px'}}/>
            <label htmlFor='inputColor'>Выберите цвет - </label>
            <input id='inputColor' type='color' onBlur={onChoiceColor}></input>
         </div>   
      </div>
   )
}

export default Setting;