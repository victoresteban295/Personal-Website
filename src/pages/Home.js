import React from "react";

/* Images */
import losAngeles from "../images/home_images/losAngeles.jpg";
import fundraiserEvent from "../images/home_images/fundraiserEvent.jpg";
import stJudeRun from "../images/home_images/stJudeRun.jpg";
import gradPic from "../images/home_images/gradPic.JPG";

export default function Home() {

    /* Home Logo */
    var homeFill =
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
        </svg>

    return (
        <div className="card-container">

            {/* Header */}
            <div className="header-container">
                <div className="header">
                    <h2 className="header-title">{homeFill} Home</h2>
                </div>

                <hr className="header-line" />
            </div>
            {/* <div className="header">
                <h2 className="header-title">{homeFill} Home</h2>
            </div>

            <hr className="header-line" /> */}

            <div className="home-section01">
                <div className="home-section01-image-container">
                    <div className="home-image03-background">
                        <img className="home-image03" src={losAngeles} alt="" />
                    </div>
                </div>

                <div className="home-section01-txt-container">
                    <h3>About Me</h3>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum ipsa natus cupiditate, temporibus ea earum repudiandae 
                        facere debitis, quis vitae alias. Consectetur dolorum 
                        aperiam doloribus, commodi, veniam expedita dolorem ducimus 
                        minima, consequatur cupiditate eveniet non sequi eaque 
                        soluta est? Soluta non illo eum saepe molestias ipsa natus 
                        ex suscipit cupiditate.
                    </p>
                </div>
            </div>

            <hr className="content-line-divider" />

            <div className="home-section02">
                <div className="home-section02-txt-container">
                    <h3>Life At Albion</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum ipsa natus cupiditate, temporibus ea earum repudiandae
                        facere debitis, quis vitae alias. Consectetur dolorum
                        aperiam doloribus, commodi, veniam expedita dolorem ducimus
                        minima, consequatur cupiditate eveniet non sequi eaque
                        soluta est? Soluta non illo eum saepe molestias ipsa natus
                        ex suscipit cupiditate.Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Cum ipsa natus cupiditate, temporibus ea 
                        facere debitis, quis vitae alias. Consectetur dolorum
                        aperiam doloribus, commodi, veniam expedita dolorem ducimus
                        minima, consequatur cupiditate eveniet non sequi eaque
                        soluta est? Soluta non illo eum saepe molestias ipsa natus
                        ex suscipit cupiditate.
                    </p>
                </div>

                <div className="home-section02-image-container">
                    <div className="home-image01-background">
                        <img className="home-image01" src={fundraiserEvent} alt="" />
                    </div>
                    <div className="home-image04-background">
                        <img className="home-image04" src={stJudeRun} alt="" />
                    </div>
                </div>
            </div>

            <hr className="content-line-divider" />

            <div className="home-section03">
                <div className="home-section03-image-container">
                    <div className="home-image02-background">
                        <img className="home-image02" src={gradPic} alt="" />
                    </div> 
                </div>

                <div className="home-section03-txt-container">
                    <h3>Life After Graduation</h3>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum ipsa natus cupiditate, temporibus ea earum repudiandae 
                        facere debitis, quis vitae alias. Consectetur dolorum 
                        aperiam doloribus, commodi, veniam expedita dolorem ducimus 
                        minima, consequatur cupiditate eveniet non sequi eaque 
                        soluta est? Soluta non illo eum saepe molestias ipsa natus 
                        ex suscipit cupiditate.
                    </p>
                </div>
            </div>





            

                {/* <div className="home-image03-background">
                    <img className="home-image03" src={losAngeles} alt="" />
                </div>

                <div className="home-image04-background">
                    <img className="home-image04" src={stJudeRun} alt="" />
                </div>

                <div className="home-image01-background">
                    <img className="home-image01" src={fundraiserEvent} alt="" />
                </div>

                <div className="home-image02-background">
                    <img className="home-image02" src={gradPic} alt="" />
                </div> */}

            


           

            

            


        </div>
    )
}