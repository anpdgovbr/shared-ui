import Divider from "@mui/material/Divider"
import { Button } from "@mui/material"

/** 
 * TODO:
 * Consertar a formatação, possivelmente vai ter que refazer
*/
export interface GovBRITemProps{
  image?: string
  label: React.ReactNode
  sideButton?: string
  state?: 'active' | 'selected' | 'disabled'
}

export const GovBRItem: React.FC<GovBRITemProps> = ({
  image,
  label,
  sideButton,
  state = 'active'
}) => {

   function handleItemClick() {
    alert("Clicou no botão")
  }

    return (
      <div className="itemsList">
        <div className="br-item">
          <img className="itemImage" src={image}></img>
          <p>{label}</p>
        </div>
        <Divider/>
        <div className="br-item">
          <p>{label}</p>
          <button><img src={sideButton}/></button>
        </div>
        <Divider/>
        <a className="br-item" onClick={handleItemClick}></a>
        <Divider/>
        <Button sx={{maxHeight: 10}} className="br-item" onClick={handleItemClick}/>
      </div>
      

    )
}

