import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {setTheme} from '../store/features/theme/ThemeSlice'

export const ThemeComponent = () => {
  
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Theme Component</h1>
      <input type="text" onChange={(e) => {setColor(e.target.value)}} /> {/* input'a yazdığımız değeri color değişkenine atıyorum. */}
      
      <button onClick={() => {  // butona tıklandığında dispatch ile setTheme fonksiyonuna color değişkenini gönderiyorum.      
        dispatch(setTheme(color))}}>Set Color</button> {/* setTheme fonksiyonu içerisindeki payload değişkenine color değişkenini atıyorum. */}
    </div>
  )
}

export default ThemeComponent;
