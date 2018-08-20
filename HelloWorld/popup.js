$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val())
    })
});

var options={
    type:"basic",
    title:"first notification",
    message:"this pretty",
    iconUrl:"icon16.png"
};

chrome.notifications.create(options,callback);

function callback()
{
    console.log('done');
}