/*!
 * jQuery deboo plugin for animated progressbar
 * Original author: @iNehalPatel
 * Further changes, comments: @iNehalPatel
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    var current = 0;
    // Create the defaults plugin
    var deboo = "deboo",
        defaults = {
            speed   : 50,
            progress : 100,
            min_value : 0
        };

    // plugin constructor
    function Deboo( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = deboo;

        this.init();
    }

    Deboo.prototype = {

        init: function() {
            // this.yourOtherFunction(this.element, this.options).            
            this.animate_progress(this, this.element, this.options);
        },
        
        animate_progress: function(plugin, el, options){
            var percentageWidth = $(el).closest(".progress").outerWidth()/100;
            
            $(el).css({"width" : options.min_value + "%"});
            $(el).find(".inner").attr("aria-valuenow", options.min_value+'%');

            if(options.min_value >= options.progress)
                return;
            
            options.min_value++;
            setTimeout(function(){
                plugin.animate_progress(plugin, el, options);
            },options.speed);
        }
    };

    // for multiple instances
    $.fn[deboo] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + deboo)) {
                $.data(this, "plugin_" + deboo,
                new Deboo( this, options ));
            }
        });
    };

})( jQuery, window, document );
