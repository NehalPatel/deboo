/*!
 * jQuery deboo plugin for animated progressbar
 * Original author: @iNehalPatel
 * Further changes, comments: @iNehalPatel
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    // Create the defaults plugin
    var deboo = "deboo",
        defaults = {
            start_value : 0,
            end_value : 100,
            wrap : false,
            skill:'Dev',
            pclass : 'progress-primary'
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
            // 
            this.wrap_element(this.element, this.options);            
            this.animate_progress(this, this.element, this.options);
        },

        wrap_element : function(element, options){


           var parent = $("<div/>", {
                'class' : 'progress'
           }).addClass(options.pclass);
           
           $(element).wrap(parent).addClass('progress-bar');

           $("<span/>", {
                'class' : 'skill',
                'text'  : options.skill
           }).appendTo(element);

           var inner = $("<div/>", {
                'class' : 'pvalue'
           }).appendTo(element);

           $("<span/>", {
                'class' : 'inner'
           }).appendTo(inner);
        },
        
        animate_progress: function(plugin, el, options){
            var percentageWidth = $(el).closest(".progress").outerWidth()/100;

            $(el).css({"width" : options.start_value + "%"});
            $(el).find(".inner").attr("aria-valuenow", options.start_value+'%');

            if(options.start_value >= options.end_value)
                return;
            
            options.start_value++;
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
