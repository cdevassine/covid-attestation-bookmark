javascript:(function(){  

var data = {
	"firstname" : "Jean", /* ou le votre */
	"lastname" : "Michel", /* ou le votre */
	"birthday" : "01/02/1920", /* ou la votre */
	"placeofbirth" : "la maternité", /* ou la votre */
	"address" : "2 bis rue des carottes", /* ou la votre */
	"city" : "Ma Ville", /* ou la votre */
	"zipcode" : "12345", /* ou le votre */
	"datesortie" : new Date("2019-02-19"), /* ou une chaine "jj/mm/AAAA" */
	"heuresortie" : new Date(), /* ou une chaine "jj/mm/AAAA" */
	"field-reason" : ["travail", "achats"] /* aussi possible .. "sante", "famille", "handicap", "sport_animaux", "convocation", "missions", "enfants" */
};

function formatDate(d) {
        var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
function formatTime(d) {
    var hours = '' + d.getHours(),
        min = '' + d.getMinutes();
    if (min.length < 2)
        min = '0' + min;
    if (hours.length < 2)
        hours = '0' + hours;
    return [hours, min].join(':');
}

for(var name in data){
	var input = document.querySelector('input[name="'+name+'"]');
	if(input){
		var value = data[name];
		if ( Object.prototype.toString.call(value) === "[object Date]" ) {
			if(name === 'datesortie'){
				input.value = formatDate(value);
			}else if(name === 'heuresortie'){
				input.value = formatTime(value);
			}
		}else if(Array.isArray(value)){
			var items=document.getElementsByName(name);
		    for(var i=0; i<items.length; i++)
		    {
		    	var checkbox = items[i];
		        if(value.indexOf(checkbox.value) > -1){
		        	checkbox.checked = true;
		        }else{
		        	checkbox.checked = false;
		        }
		    }
		} else{
			input.value = value;
		}
	}
}

})();
