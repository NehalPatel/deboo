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
            speed : 50,
            wrap : false,
            skill:'Unknown',
            pclass : 'progress-primary',

            beforeStart   : $.noop, // Before changing in current item
            afterEnd    : $.noop, // After opening
            onProgress  : $.noop
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
            
            this.options.beforeStart.call();

            this.wrap_element(this.element, this.options);            
            this.animate_progress(this, this.element, this.options);

        },

        _flipOnComplete : function(element, options){
            setTimeout(function(){
                $(".flip-container", element).addClass('hover');

                setTimeout(function(){
                    $(".flip-container", element).removeClass('hover');
                }, 1000);

            }, 200);
        },

        wrap_element : function(element, options){

           var wrapper = $("<div/>", {
                'class' : 'progress'
           }).addClass(options.pclass);
           
           $(element).wrap(wrapper).addClass('progress-bar');

           $("<span/>", {
                'class' : 'skill',
                'text'  : options.skill
           }).appendTo(element);

           var inner = $("<div/>", {
                'class' : 'pvalue flip-container'
           }).appendTo(element);

           var flipper = $("<div/>", {
                'class' : 'flipper'
           }).appendTo(inner);

           $("<span/>", {
                'class' : 'inner front'
           }).appendTo(flipper);

           $("<span/>", {
                'class' : 'inner back'
           }).appendTo(flipper);
        },
        
        animate_progress: function(plugin, el, options){
            var percentageWidth = $(el).closest(".progress").outerWidth()/100;

            $(el).css({"width" : options.start_value + "%"});
            $(el).find(".front").attr("aria-valuenow", options.start_value+'%');
            $(el).find(".back").attr("aria-valuenow", 'DONE');

            if(options.start_value >= options.end_value){
                plugin.options.afterEnd.call();
                plugin._flipOnComplete(el, options);
                return;
            }
            
            options.start_value++;
            setTimeout(function(){
                plugin.animate_progress(plugin, el, options);
                plugin.options.onProgress(plugin.options.start_value);
            },plugin.options.speed);
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
