import React from 'react';
import { StyledButton } from './styles/StyledButton'
import Music from '../assets/music/dub-theme-tetris.mp3'
import './MusicButton.scss'


const MusicButton = () => (
  <div>
    {/* this.myRef = React.createRef(); */}
    {/* <StyledButton>||   Music</StyledButton> */}
    <audio className='audio' src={Music} controls autoPlay loop />
    {/* <iframe title='music' width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282742892&color=%2319ccf3&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}
  </div>
);

export default MusicButton;