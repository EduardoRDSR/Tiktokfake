import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return (
        <div className='videofooter'>
            <div className='videoFooter__text'>
                <h3>@Eduardo Rodrigues</h3>
                <p>Descrição do video</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooterMusic__text'>
                        <p>Titulo da musica</p>
                    </div>
                </div>
            </div>
            <img
                className='videoFooter__record'
                alt='Imagem de um vinil girando'
                src='https://cdn.discordapp.com/attachments/1090791451383832711/1091124309738663936/96463.png'
            />
        </div>
    )
}

export default VideoFooter