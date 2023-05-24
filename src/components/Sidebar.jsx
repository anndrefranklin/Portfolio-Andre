import SocialNetworkContainer from './SocialNetworkContainer ';
import InformationContainer from './InformationContainer';

import Avatar from '../img/eu.jpeg';
import "../styles/components/sidebar.sass";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="André Franklin" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default Sidebar

