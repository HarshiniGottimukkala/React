import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme} from '../Slices/themeSlice'

const Theme = () => {

    const theme= useSelector((state)=>{
        return state.toggletheme.theme
      })
      const dispatch = useDispatch();

      const handleToggleTheme =()=>{
        dispatch(changeTheme())
      }
      
      
    return (
        <div>
            <h1>{theme}</h1>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    )
}

export default Theme