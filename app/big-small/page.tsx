'use client';
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header/header'
import { useState, useEffect } from 'react'

export default function BigSmall() {

    useEffect(() => {
        let a: any = document.getElementById("defaultOpens");
        a.click();
        let a1: any = document.getElementById("defaultOpen1");
        a1.click();
    }, [])

    const openTab1 = (evt: any, action: string) => {
        var i, tabcontent: any, tablinks;
        tabcontent = document.getElementsByClassName("tabcontents");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        if (action) {
            let a: any = document.getElementById(action);
            a.style.display = "block";
        }
        evt.currentTarget.className += " active";
    }

    const openTab2 = (evt: any, action: string) => {
        var i, tabcontent: any, tablinks;
        tabcontent = document.getElementsByClassName("tabcontents1");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        if (action) {
            let a: any = document.getElementById(action);
            a.style.display = "block";
        }
        evt.currentTarget.className += " active";
    }



    return (
        <div className="main-bigsmall">
            <Header></Header>
            <div className="content-bigsmall">
                <div className="content-bigsmall-left">
                    <div className="content-bigsmall-left-header">
                        <div className='epoch'>
                            <label htmlFor="">Epoch</label>
                            <span>10</span>
                            <img src="bog.png" alt="" style={{}} />
                        </div>
                        <div className='time'>
                            <label htmlFor="">Time</label>
                            <span>03:40</span>
                            <img src="bog.png" alt="" style={{}} />
                        </div>
                        <div className="block-hash">
                            <label htmlFor="">Block/ Hash</label>
                            <div >
                                <span className='has1'>Block: 29,857,836</span>
                                <img src="glasmorphic1 6.png" alt="" style={{ marginBottom: '10px' }} />
                            </div>
                            <div>
                                <span className='has2'>Hash: 0x729736649e...489679c432c02</span>
                                <img src="glasmorphic1 5.png" alt="" style={{}} />
                            </div>
                        </div>
                        <div className="result">
                            <label htmlFor="">Time</label>
                            <img src="bog.png" alt="" style={{}} />
                        </div>
                    </div>
                    <div className="main-tab">
                        <div className="tabs">
                            <button className="tablinks" onClick={(e) => openTab1(e, 'Chart')} id="defaultOpens" >Chart</button>
                            <button className="tablinks" onClick={(e) => openTab1(e, 'history')}>Result history</button>
                            <button className="tablinks" onClick={(e) => openTab1(e, 'Ranks')}>Ranks</button>
                        </div>
                        <div className='tabcontentsmain'>
                            <div id="Chart" className="tabcontents list-popy">
                                <div><img src="do.png" style={{ width: '100px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div>
                                    <span>76</span>
                                    <img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="do.png" style={{ width: '80px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div><img src="do.png" style={{ width: '100px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                    <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                    <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div><span>14</span><img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="do.png" style={{ width: '80px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div><img src="do.png" style={{ width: '100px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div><span>16</span><img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="do.png" style={{ width: '80px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                    <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div><span>14</span><img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="do.png" style={{ width: '80px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="xanh.png" style={{ width: '90px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div><img src="do.png" style={{ width: '100px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div><span>16</span><img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <img src="do.png" style={{ width: '30px' }} alt="" /></div>
                                <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                                <div><span>14</span><img src="xanh.png" style={{ width: '140px' }} alt="" /></div>
                                <div>
                                    <span>16</span>
                                    <img src="do.png" style={{ width: '80px' }} alt="" /></div>
                                    <div>
                                    <img src="xanh.png" style={{ width: '30px' }} alt="" /></div>
                                    <div>
                                    <span>12</span>
                                    <img src="do.png" style={{ width: '60px' }} alt="" /></div>
                            </div>
                            <div id="history" className="tabcontents">
                                <table className='tavble_big'>
                                    <thead>
                                        <tr>
                                            <th>Epoch</th>
                                            <th>Block</th>
                                            <th>Hash</th>
                                            <th>Result</th>
                                            <th>Volume</th>
                                            <th>Date</th>
                                            <th><img src="material-symbols_search.png" alt="" /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>#1</td>
                                            <td >29,857,836</td>
                                            <td>0x7846e1ad4....000c633cecb</td>
                                            <td style={{ color: '#0ECB81' }}>50</td>
                                            <td style={{ color: '#F6465D' }}>1.500.500$</td>
                                            <td>24-02-2023 09:00 AM</td>
                                            <td></td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div id="Ranks" className="tabcontents">
                                <p>Nội dung chưa có</p>
                            </div>
                        </div>
                    </div>
                    <div className="map-big">
                        <div className='headr-map'>
                            <span style={{ color: '#ffffff' }}>Vol(USDT)</span>
                            <span style={{ color: '#63A0CC' }}>1.457B</span>
                            <span style={{ color: '#0ECB81' }}>46.808K</span>
                            <span style={{ color: '#F6465D' }}>55.806K</span>
                        </div>
                        <img style={{ width: '100%' }} src="map.png" alt="" />
                    </div>
                    <div className="main-tab">
                        <div className="tabs1">
                            <button className="tablinks1" onClick={(e) => openTab2(e, 'p11')} id="defaultOpen1" >Position</button>
                            <button className="tablinks1" onClick={(e) => openTab2(e, 'p22')}>Transaction history</button>
                        </div>
                        <div className='tabcontentsmain'>
                            <div id="p11" className="tabcontents1">
                                <table className='tavble_big'>
                                    <thead>
                                        <tr>
                                            <th>Epoch</th>
                                            <th>Order</th>
                                            <th>Volume</th>
                                            <th>Risk</th>
                                            <th>Match</th>
                                            <th>Block</th>
                                            <th>Hash</th>
                                            <th>Result</th>
                                            <th>Profit</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#10</td>
                                            <td style={{ color: '#0ECB81' }}>Big</td>
                                            <td>1000$</td>
                                            <td>100%</td>
                                            <td>50%</td>
                                            <td>456216....asxc57</td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                        </tr>

                                        <tr>
                                            <td>#10</td>
                                            <td style={{ color: '#F6465D' }}>Small</td>
                                            <td>1000$</td>
                                            <td>100%</td>
                                            <td>50%</td>
                                            <td>456216....asxc57</td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>#10</td>
                                            <td style={{ color: '#0ECB81' }}>Big</td>
                                            <td>1000$</td>
                                            <td>100%</td>
                                            <td>50%</td>
                                            <td>456216....asxc57</td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>#10</td>
                                            <td style={{ color: '#F6465D' }}>Small</td>
                                            <td>1000$</td>
                                            <td>100%</td>
                                            <td>50%</td>
                                            <td>456216....asxc57</td>
                                            <td style={{ color: '#F6465D' }}>49</td>
                                            <td>49</td>
                                            <td>+100$</td>
                                            <td><img src="Group 584.png" alt="" /></td>
                                        </tr>
                                        <tr>
                                            <td>#10</td>
                                            <td style={{ color: '#0ECB81' }}>Big</td>
                                            <td>1000$</td>
                                            <td>100%</td>
                                            <td>50%</td>
                                            <td>456216....asxc57</td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="uiw_loading.png" alt="" /></td>
                                            <td><img src="Group 586.png" alt="" /></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div id="p22" className="tabcontents1">

                                <p>Nội dung chưa có</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-bigsmall-center">
                    <div className="div-big">
                        <label htmlFor="" style={{ background: '#0ECB81' }}>Big</label>
                        <table className='table-div-center'>
                            <thead><tr><th>Amount(USD)</th><th>Risk Level</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="div-big mt-4">
                        <label htmlFor="" style={{ background: '#F6465D' }}>Small</label>
                        <table className='table-div-center'>
                            <thead><tr><th>Amount(USD)</th><th>Risk Level</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="div-big mt-4">
                        <label htmlFor="" style={{ background: '#2958B5' }}>Trades</label>
                        <table className='table-div-center'>
                            <thead><tr><th>Amount(USD)</th><th>Risk Level</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#0ECB81" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#F6465D" }}>140$</td>
                                    <td>150%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="content-bigsmall-right">
                    <div className="div-limit mb-4">
                        <div className='header-div-limit'>
                            <label htmlFor="" style={{ background: '#2958B5' }}>Limit</label>
                            <label htmlFor="" style={{ background: '#d9d9d90f' }}>Market</label>
                        </div>
                        <span className='title_limit'>Availability</span>
                        <div className='item_value'>
                            <span style={{ color: '#a9a5a5e6' }}>Risk</span>
                            <p>25 %</p>
                        </div>
                        <div className="ranger-div">
                            <ul>
                                <li style={{ background: '#2958B5' }}>25</li>
                                <li>50</li>
                                <li>100</li>
                                <li>125</li>
                                <li>150</li>
                            </ul>
                        </div>
                        <div className='item_value'>
                            <span style={{ color: '#a9a5a5e6' }}>Amount</span>
                            <p>0 USD</p>
                        </div>

                        <div className="ranger-div rang-footer">
                            <ul>
                                <li style={{ background: '#2958B5' }}>25</li>
                                <li>50</li>
                                <li>100</li>
                                <li>125</li>
                                <li>150</li>
                            </ul>
                        </div>
                        <div className="btn-limit">
                            <button style={{ background: '#0ECB81' }}>Big</button>
                            <button style={{ background: '#F6465D' }}>Small</button>
                        </div>
                    </div>
                    <div className="div-big ">
                        <label htmlFor="" style={{ background: '#2958B5' }}>Claim</label>
                        <p className='text-claim-all'>Claim All</p>
                        <div className='claim-big-ff'>
                            <table className='table-div-center'>
                                <thead><tr><th>Epoch</th><th>Volume</th><th>Result</th><th>Profit</th><th>Status</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td > #10</td>
                                        <td>1000$</td>
                                        <td style={{ color: "#0ECB81" }}>50</td>
                                        <td style={{ color: "#0ECB81" }}>+100$</td>
                                        <td><img src="Group 584.png" alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
