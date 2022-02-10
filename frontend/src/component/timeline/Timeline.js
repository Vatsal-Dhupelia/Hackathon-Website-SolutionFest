import React from 'react'
import "./Timeline.css"
const Timeline = () => {
    return (
        <>
            <h1 data-aos="flip-up" className='my-3' style={{ color: "#e85510", textAlign: "center" }}>Timeline</h1>
            <div className='vertical-timeline vertical-timeline--animate vertical-timeline--two-columns'>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(66, 133, 244)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(234, 67, 53)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(66, 133, 244)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(234, 67, 53)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(66, 133, 244)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(234, 67, 53)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(234, 67, 53)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>
                <div className='vertical-timeline-element--work vertical-timeline-element'>
                    <span className='vertical-timeline-element-icon bounce-in' style={{ background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)" }}>
                        <svg className='MuiSvgIcon-root' focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
                        </svg>
                    </span>
                        <div className='vertical-timeline-element-content bounce-in' style={{background: "rgb(66, 133, 244)", color: "rgb(255, 255, 255)"}}>
                            <div className="vertical-timeline-element-content-arrow" style={{borderRight: "7px solid rgb(66, 133, 244)"}}></div>
                            <h3 className='vertical-timeline-element-title'>Title</h3>
                            <span className='vertical-timeline-element-date'><h3 style={{color: "black", textAlign: "center"}}>Date</h3></span>
                        </div>
                </div>

                
                
            </div>
            
        </>
    )
}

export default Timeline