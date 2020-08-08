import React from 'react';
import "./Body.css";
import Header from './Header';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    const playSong = (id) => {
        spotify.play({ uris: [`spotify:track:${id}`] })
        .then((res) => {
            console.log("playdong")
            console.log(res);
            spotify.getMyCurrentPlayingTrack().then((r) => {
                console.log("current playing track")
                console.log(r);
            })
        })
    }

    return ( 
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon  className="body__shuffle"/>
                    <FavoriteBorderIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>

                {discover_weekly?.tracks.items.map(item => {
                    return <SongRow track={item.track} key={item.track.id} playSong={playSong} />
                })}
            </div>
        </div>
     );
}
 
export default Body;