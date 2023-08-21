"use client"
import Link from "next/link";
import Image from 'next/image';
import  { useState, useEffect } from 'react'

export default function Header() {
    let [menuStatus, setmenuStatus] = useState(false);

    function clickLogo() {
        setmenuStatus(menuStatus = !menuStatus);
    }
  return (
    <div className="div-wapper-hd">
    <div className="main-header">
      <div className="menu header-container">
        <img src="logo1.png" className="logo" alt="" />
        <ul className="menu-ul">
          <li className="active">
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/big-small'}>Big Small</Link>
          </li>
          <li>
            <Link href={'/odd-even'} >Odd Even</Link>
          </li>
          <li>
            <Link href={'/lottery'} >Lottery</Link>
          </li>
          <li>
            <Link href={'/pool'} >Pool</Link>
          </li>
        </ul>
        <div className="div-btn">
        <button>Connect Wallet</button>
        </div>
      </div>
           {/* Header  mobile */}
           <div className="header-mobile">
                    <div className="header-mobile-content">
                        <div className="header-mobile-logo">
                            <img src="logo.png" />
                        </div>
                        <div className="btn-menu-mobile">
                            <img onClick={clickLogo} src="menu-bar.png" />
                            {menuStatus ? (
                                <ul className="list-menu-mobile">
                                  <li className="active">
                                  <Link href={'/'}>Home</Link>
                                </li>
                                <li>
                                  <Link href={'/big-small'}>Big Small</Link>
                                </li>
                                <li>
                                  <Link href={'/odd-even'} >Odd Even</Link>
                                </li>
                                <li>
                                  <Link href={'/lottery'} >Lottery</Link>
                                </li>
                                <li>
                                  <Link href={'/pool'} >Pool</Link>
                                </li>
                                <li>
                                <div className="div-btn">
                                <button style={{width:'100%'}}>Connect Wallet</button>
                                </div>
                                
                                </li>
                                </ul>
                             
                            ) : null
                            }


                        </div>
                    </div>
                </div>
    </div>
    </div>
  )
}