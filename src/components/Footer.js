import React,{useEffect} from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useDataLayerValue } from '../DataLayer';

const Footer = ({spotify}) => {

    const [{item, playing}] = useDataLayerValue();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
    
        //   dispatch({
        //     type: "SET_PLAYING",
        //     playing: r.is_playing,
        //   });
    
        //   dispatch({
        //     type: "SET_ITEM",
        //     item: r.item,
        //   });
        });
      }, [spotify]);

    return ( 
        <div className="footer">
            <div className="footer__left">
                <img src="https://i.pinimg.com/originals/18/e8/b2/18e8b2efc4c1d2b6963decdc9f04ca17.jpg" alt="" className="footer__albumLogo"/>
                <div className="footer__songInfo">
                    <h4>Album</h4>
                    <p>Song</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
     );
}
 
export default Footer;