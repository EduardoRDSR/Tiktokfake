import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className='videofooter'>
            <div className='videoFooter__text'>
                <h3>@{ name }</h3>
                <p>{ description }</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooterMusic__text'>
                        <p>{ music }</p>
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