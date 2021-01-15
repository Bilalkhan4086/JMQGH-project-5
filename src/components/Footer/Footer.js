import React from 'react'
import g from './git.svg';
import w from './wts.svg';
import f from './fb.svg';
import t from './tele.svg';
import e from './email.svg';
import './index.css';
export const Footer = () => {
    return (
        <div className='FooterMain'>
            <div style={{padding:"10px"}}>
            <a href="https://github.com/Bilalkhan4086"><img src={g} alt="github" width="50px"/></a>&nbsp;&nbsp;
            <a href="https://wa.me/923448884086/?text=Hi Muhammad Bilal,Message from J.M.Q.G.H, Whatsup"><img src={w}  alt="whatsapp" width="50px"/></a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/profile.php?id=100012243097496"><img src={f} alt="facebook" width="50px"/></a>&nbsp;&nbsp;
            <a href="tel:923448884086"><img src={t} alt="telephone" width="50px"/></a>&nbsp;&nbsp;
            <a href="mailto:bscs.f18.m16.a@gmail.com"><img src={e} alt="emial" width="50px"/></a>
            </div>
            <div>
                Jammiya Missriya Qadriya Gulzar-e-Habib<br/>
                Developer: Muhammad Bilal
            </div>
        </div>
    )
}
