define([

    // load jQuery first
    "jquery",

    // html5 shim
    "modernizr-2.5.3.min",

    // jQuery plugins
    "jquery.alpha",
    "jquery.beta"

], function($)
{
    $(function()
    {
        $('body').alpha().beta();
    });
});