import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpeg';
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return( 
    <aside id="sidebar">
      <img src={Avatar} alt="Andre" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Curriculo</a>
    </aside>
    );  
}

export default Sidebar

