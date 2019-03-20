(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:

        platform.create(100, 520, 2, 1);
        platform.create(700, game.world.height - 62);
        platform.create(655, 165, .05, 11.2);
        platform.create(630, 165, .05, 11.2);
        platform.create(674, 400);
        platform.create(674, 280);
        platform.create(630, 165);
        platform.create(500, 0, .1, 12);
        platform.create(100, 0, .1, 16.4);
        platform.create(140, 430, .3)
        platform.create(380, 352, .3)
        platform.create(140, 274, .3)
        platform.create(380, 196, .3)
        platform.create(140, 118, .9)
        // ALL YOUR CODE GOES ABOVE HERE //////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);