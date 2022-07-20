import React, {useState, useRef} from 'react'
import {Button, TextField, Typography} from '@mui/material'


import coms from './comments.json'

import img from '../assets/user.png'
import img1 from '../assets/user1.png'
import img2 from '../assets/user2.png'
import img3 from '../assets/user3.png'
import img4 from '../assets/user4.png'

import './commentsection.css'

import { useTranslation } from "react-i18next";




const CommentSection = ({ user, changeLanguage }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(coms);
    const [id, setId] = useState(coms.length);

    const { t } = useTranslation();

    const img0 = (user && user.photos[0].value) ? user.photos[0].value : img;
    const images = [img1, img2, img3, img4, img1, img0, img0, img0, img0, img0, img0, img0, img0, img0, img0 , img0, img0, img0, img0, img0 ];

    const handleClick = () => {
        setId(id + 1)
        var array = coms;
        array.push({
            id: id,
            user: "You",
            comment: comment
        })
        setComments(array)
        console.log(comments)
        console.log(comments.length)
    }

  return (
    <div>
        <div>
            <div>
                <h3 style={{fontSize: '2rem', textAlign: 'center'}}>{t('comment_section')}</h3>

                {comments.map(record => {
                    return(
                        <div key={record.id}>
                            <div id='user'>
                                <img src={images[record.id]} style={{width: '40px', paddingRight: '5px'}}></img>
                                {record.user}
                            </div>
                            <div id='comment'>{record.comment}</div>
                            <hr/>
                        </div>
                    )
                }
                )}
            </div>
            <div style={{width: '70%'}}>
                <h5 style={{fontSize: '1.5rem', paddingLeft: '2rem'}}>{t('write_comment')}</h5>
            </div>
            <TextField 
                
                fullWidth 
                rows={4} 
                variant="outlined" 
                multiline 
                label={t('comment')}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Button style={{marginTop: '10px'}} fullWidth disabled={!comment || !user} variant="contained" onClick={handleClick}>
                {user ? <span>{t('comment')}</span> : <span style={{color: 'black'}}>{t('sign_in_to_comment')}</span>}
            </Button>
        </div>
      
    </div>
  )
}

export default CommentSection
