import avatar from '../images/avatar.png';
import '../style/Entete.scss';
import Avatar from '@material-ui/core/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets (Beta)</div>
      <div className="avatar">Camille Semaan 
        <Avatar src={avatar} alt="Camille Semaan" />
      </div>
    </header>
  );
}