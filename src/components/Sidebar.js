import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

const Sidebar = () => {
    const [{playlists }, dispatch] = useDataLayerValue();
    return ( 
        <div className="sidebar">
            <img className="sidebar__logo" alt="spotify-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your library" Icon={LibraryMusicIcon}/>
            
             <p className="sidebar__title">PLAYLISTS</p>   
            <hr/>
            {playlists?.items?.map(playlist => {
                return <SidebarOption key={playlist.id} title={playlist.name}/>
            })}
        </div>
     );
}
 
export default Sidebar;