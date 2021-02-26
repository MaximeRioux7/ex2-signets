import '../style/BtnAjoutRessource.scss';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {
  return (
      <Fab className ="BtnAjoutRessource">
        <AddIcon />
      </Fab>
  );
}