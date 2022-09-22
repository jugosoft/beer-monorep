import React from "react";

const Info = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                        <h5 class="center">Fill Filled with Beer</h5>
                        <p class="light">I'm planning to introduce IT into brewing</p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                        <h5 class="center">Bring New Ideas</h5>
                        <p class="light">V Rossii jhopa, a mne nuzhno chto-to delat'.</p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                        <h5 class="center">Stay Focused on Beer</h5>
                        <p class="light">Alcohol is pure Evil, but this though doesn't stop me</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m4">
                    <div class="center promo promo-example">
                    <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                        <p class="promo-caption">Speeds up development</p>
                        <p class="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components.</p>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="center promo promo-example">
                    <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                        <p class="promo-caption">User Experience Focused</p>
                        <p class="light center">By utilizing elements and principles of Material Design, we were able to create a framework that focuses on User Experience.</p>
                    </div>
                </div>
                <div class="col s12 m4">
                    <div class="center promo promo-example">
                    <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                        <p class="promo-caption">Easy to work with</p>
                        <p class="light center">We have provided detailed documentation as well as specific code examples to help new users get started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;