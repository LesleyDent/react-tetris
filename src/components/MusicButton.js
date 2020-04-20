import React from 'react';
import { StyledMusicButton } from './styles/StyledMusicButton'

const MusicButton = () => (
  <div>
    <StyledMusicButton>Music</StyledMusicButton>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282742892&color=%2319ccf3&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
  </div>
);

export default MusicButton;