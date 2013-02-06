function change(e)
{
	$('#outputG').html(e);
	var val = (100-(11*e))/12;
	$('#outputW').html(val)
	$('.onecol').css('margin-right',e + '%');
	$('.onecol').css('width',val + '%');
	$('.onecol:last-child').css('margin-right','0%');
	
	$('.twocol').css('margin-right',e + '%');
	val = (100-(5*e))/6;
	$('.twocol').css('width',val + '%');
	$('.twocol:last-child').css('margin-right','0%');
	
	$('.threecol').css('margin-right',e + '%');
	val = (100-(3*e))/4;
	$('.threecol').css('width',val + '%');
	$('.threecol:last-child').css('margin-right','0%');
	
	$('.fourcol').css('margin-right',e + '%');
	val = (100-(2*e))/3;
	$('.fourcol').css('width',val + '%');
	$('.fourcol:last-child').css('margin-right','0%');
	
	$('.sixcol').css('margin-right',e + '%');
	val = (100-(1*e))/2;
	$('.sixcol').css('width',val + '%');
	$('.sixcol:last-child').css('margin-right','0%');
	
	$('.twelvecol').css('margin-right',e + '%');
	val = (100-(e))/1;
	$('.twelvecol').css('width',val + '%');
	$('.twelvecol:last-child').css('margin-right','0%');
}

function overlay()
{
	console.log("gg");
	$('.onecol').toggleClass('spec');
	$('.twocol').toggleClass('spec');
	$('.threecol').toggleClass('spec');
	$('.fourcol').toggleClass('spec');
	$('.fivecol').toggleClass('spec');
	$('.sixcol').toggleClass('spec');
	$('.sevencol').toggleClass('spec');
	$('.eightcol').toggleClass('spec');
	$('.ninecol').toggleClass('spec');
	$('.tencol').toggleClass('spec');
	$('.elevencol').toggleClass('spec');
	$('.twelvecol').toggleClass('spec');
}