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
            propertyName: "value",
            width   : 100,
            height  : 100,
            color   : "#ff00ff",
            border  : "1px solid red",
            background_color : "#ff00ff"
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
            var progress = $(el).data('progress');

            $(el).css({"width" : current + "%"});
            $(el).find(".inner").attr("aria-valuenow", current+'%');

            if(current >= progress)
                return;
            
            current++;
            setTimeout(function(){
                plugin.animate_progress(plugin, el, options);
            },50);
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
