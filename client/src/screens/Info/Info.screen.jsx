import React from "react";

const Info = () => {
    return( 
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
        </div>
    );
}

export default Info;