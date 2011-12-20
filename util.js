/**
 * Utility functions for the pvheat web app.
 *
 * This file is part of pvheat.
 *
 * Copyright Jon Sowman 2011
 * <jon@hexoc.com>
 *
 * All rights reserved.
 */

function convertTimestamp(stamp)
{
    var date = new Date(stamp * 1000);
    var datestr = pad(date.getHours()) + ":" 
        + pad(date.getMinutes()) + ":" 
        + pad(date.getSeconds()) + " "
        + pad(date.getDate()) + "/" 
        + pad(date.getMonth()) + "/"
        + date.getFullYear();
    return datestr;
}

function pad(v)
{
    if( v < 10 ) return "0" + v;
    return v;
}

function get_mln()
{
    var now = new Date();
    var mln = new Date(now.getFullYear(), now.getMonth(), 
            now.getDate(), 0, 0, 0);
    var ts = Math.round(mln.getTime() / 1000);
    return ts;
}

function get_now()
{
    var now = new Date();
    return Math.round(now.getTime()/1000);
}

function JtokWh(joules)
{
        joules = joules / (1000*60*60);
    return joules.toFixed(2);
}
