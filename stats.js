//https://api.covid19india.org/state_district_wise.json

// var str = []; 
// $('#main_table_countries_today tbody tr').each(function() { 
//     var o = {}; 
//     o.place = $(this).find('td:eq(0)').text().trim(); 
//     o.cases = $(this).find('td:eq(1)').text().trim().replace(/,/ig,''); 
//     o.deaths = $(this).find('td:eq(3)').text().trim().replace(/,/ig,''); 
//     str.push(o); 
// }); 
// console.log(JSON.stringify(str));

var stats =[{"place":"World","cases":"620913","deaths":"28653"},{"place":"USA","cases":"104996","deaths":"1717"},{"place":"Italy","cases":"86498","deaths":"9134"},{"place":"China","cases":"81394","deaths":"3295"},{"place":"Spain","cases":"72248","deaths":"5690"},{"place":"Germany","cases":"53340","deaths":"399"},{"place":"Iran","cases":"35408","deaths":"2517"},{"place":"France","cases":"32964","deaths":"1995"},{"place":"UK","cases":"17089","deaths":"1019"},{"place":"Switzerland","cases":"13377","deaths":"242"},{"place":"Netherlands","cases":"9762","deaths":"639"},{"place":"S. Korea","cases":"9478","deaths":"144"},{"place":"Belgium","cases":"9134","deaths":"353"},{"place":"Austria","cases":"8030","deaths":"68"},{"place":"Turkey","cases":"5698","deaths":"92"},{"place":"Portugal","cases":"5170","deaths":"100"},{"place":"Canada","cases":"4757","deaths":"55"},{"place":"Norway","cases":"3970","deaths":"20"},{"place":"Australia","cases":"3635","deaths":"14"},{"place":"Brazil","cases":"3477","deaths":"93"},{"place":"Israel","cases":"3460","deaths":"12"},{"place":"Sweden","cases":"3069","deaths":"105"},{"place":"Czechia","cases":"2422","deaths":"9"},{"place":"Malaysia","cases":"2320","deaths":"27"},{"place":"Denmark","cases":"2201","deaths":"65"},{"place":"Ireland","cases":"2121","deaths":"22"},{"place":"Ecuador","cases":"1627","deaths":"41"},{"place":"Chile","cases":"1610","deaths":"5"},{"place":"Luxembourg","cases":"1605","deaths":"15"},{"place":"Japan","cases":"1499","deaths":"49"},{"place":"Poland","cases":"1481","deaths":"17"},{"place":"Romania","cases":"1452","deaths":"29"},{"place":"Pakistan","cases":"1415","deaths":"12"},{"place":"Russia","cases":"1264","deaths":"4"},{"place":"Thailand","cases":"1245","deaths":"6"},{"place":"Saudi Arabia","cases":"1203","deaths":"4"},{"place":"South Africa","cases":"1170","deaths":"1"},{"place":"Finland","cases":"1167","deaths":"8"},{"place":"Indonesia","cases":"1155","deaths":"102"},{"place":"Philippines","cases":"1075","deaths":"68"},{"place":"Greece","cases":"966","deaths":"28"},{"place":"Iceland","cases":"963","deaths":"2"},{"place":"India","cases":"933","deaths":"20"},{"place":"Singapore","cases":"802","deaths":"2"},{"place":"Panama","cases":"786","deaths":"14"},{"place":"Mexico","cases":"717","deaths":"12"},{"place":"Diamond Princess","cases":"712","deaths":"10"},{"place":"Argentina","cases":"690","deaths":"17"},{"place":"Slovenia","cases":"684","deaths":"9"},{"place":"Serbia","cases":"659","deaths":"10"},{"place":"Estonia","cases":"645","deaths":"1"},{"place":"Peru","cases":"635","deaths":"11"},{"place":"Croatia","cases":"635","deaths":"4"},{"place":"Dominican Republic","cases":"581","deaths":"20"},{"place":"Qatar","cases":"562","deaths":""},{"place":"Hong Kong","cases":"560","deaths":"4"},{"place":"Colombia","cases":"539","deaths":"6"},{"place":"Egypt","cases":"536","deaths":"30"},{"place":"Iraq","cases":"506","deaths":"42"},{"place":"Bahrain","cases":"473","deaths":"4"},{"place":"UAE","cases":"468","deaths":"2"},{"place":"New Zealand","cases":"451","deaths":""},{"place":"Lebanon","cases":"412","deaths":"8"},{"place":"Algeria","cases":"409","deaths":"26"},{"place":"Lithuania","cases":"382","deaths":"5"},{"place":"Armenia","cases":"372","deaths":"1"},{"place":"Morocco","cases":"358","deaths":"23"},{"place":"Hungary","cases":"343","deaths":"11"},{"place":"Bulgaria","cases":"313","deaths":"5"},{"place":"Ukraine","cases":"311","deaths":"8"},{"place":"Latvia","cases":"305","deaths":""},{"place":"Slovakia","cases":"292","deaths":""},{"place":"Taiwan","cases":"283","deaths":"2"},{"place":"Uruguay","cases":"274","deaths":""},{"place":"Andorra","cases":"267","deaths":"3"},{"place":"Costa Rica","cases":"263","deaths":"2"},{"place":"Bosnia and Herzegovina","cases":"257","deaths":"4"},{"place":"North Macedonia","cases":"241","deaths":"4"},{"place":"Jordan","cases":"235","deaths":"1"},{"place":"Kuwait","cases":"235","deaths":""},{"place":"Tunisia","cases":"227","deaths":"7"},{"place":"San Marino","cases":"223","deaths":"21"},{"place":"Kazakhstan","cases":"204","deaths":"1"},{"place":"Moldova","cases":"199","deaths":"2"},{"place":"Albania","cases":"197","deaths":"10"},{"place":"Burkina Faso","cases":"180","deaths":"9"},{"place":"Vietnam","cases":"174","deaths":""},{"place":"Azerbaijan","cases":"165","deaths":"3"},{"place":"Cyprus","cases":"162","deaths":"5"},{"place":"Faeroe Islands","cases":"155","deaths":""},{"place":"Oman","cases":"152","deaths":""},{"place":"Malta","cases":"149","deaths":""},{"place":"RÃ©union","cases":"145","deaths":""},{"place":"Ghana","cases":"137","deaths":"4"},{"place":"Senegal","cases":"130","deaths":""},{"place":"Brunei","cases":"120","deaths":"1"},{"place":"Venezuela","cases":"113","deaths":"2"},{"place":"Afghanistan","cases":"110","deaths":"4"},{"place":"Sri Lanka","cases":"110","deaths":""},{"place":"Uzbekistan","cases":"104","deaths":"2"},{"place":"Mauritius","cases":"102","deaths":"2"},{"place":"Ivory Coast","cases":"101","deaths":""},{"place":"Cambodia","cases":"99","deaths":""},{"place":"Palestine","cases":"97","deaths":"1"},{"place":"Guadeloupe","cases":"96","deaths":"2"},{"place":"Honduras","cases":"95","deaths":"1"},{"place":"Belarus","cases":"94","deaths":""},{"place":"Martinique","cases":"93","deaths":"1"},{"place":"Cameroon","cases":"91","deaths":"2"},{"place":"Channel Islands","cases":"88","deaths":"1"},{"place":"Georgia","cases":"85","deaths":""},{"place":"Montenegro","cases":"82","deaths":"1"},{"place":"Nigeria","cases":"81","deaths":"1"},{"place":"Cuba","cases":"80","deaths":"2"},{"place":"Bolivia","cases":"74","deaths":""},{"place":"Trinidad and Tobago","cases":"66","deaths":"2"},{"place":"DRC","cases":"58","deaths":"6"},{"place":"Kyrgyzstan","cases":"58","deaths":""},{"place":"Paraguay","cases":"56","deaths":"3"},{"place":"Liechtenstein","cases":"56","deaths":""},{"place":"Gibraltar","cases":"55","deaths":""},{"place":"Rwanda","cases":"54","deaths":""},{"place":"Mayotte","cases":"50","deaths":""},{"place":"Bangladesh","cases":"48","deaths":"5"},{"place":"Monaco","cases":"42","deaths":""},{"place":"Kenya","cases":"38","deaths":"1"},{"place":"Macao","cases":"34","deaths":""},{"place":"Aruba","cases":"33","deaths":""},{"place":"Guatemala","cases":"32","deaths":"1"},{"place":"Isle of Man","cases":"32","deaths":""},{"place":"Jamaica","cases":"30","deaths":"1"},{"place":"French Polynesia","cases":"30","deaths":""},{"place":"French Guiana","cases":"28","deaths":""},{"place":"Zambia","cases":"28","deaths":""},{"place":"Barbados","cases":"26","deaths":""},{"place":"Madagascar","cases":"26","deaths":""},{"place":"Togo","cases":"25","deaths":"1"},{"place":"Uganda","cases":"23","deaths":""},{"place":"El Salvador","cases":"19","deaths":""},{"place":"Mali","cases":"18","deaths":""},{"place":"Bermuda","cases":"17","deaths":""},{"place":"Ethiopia","cases":"16","deaths":""},{"place":"Maldives","cases":"16","deaths":""},{"place":"New Caledonia","cases":"15","deaths":""},{"place":"Tanzania","cases":"13","deaths":""},{"place":"Djibouti","cases":"12","deaths":""},{"place":"Equatorial Guinea","cases":"12","deaths":""},{"place":"Mongolia","cases":"12","deaths":""},{"place":"Dominica","cases":"11","deaths":""},{"place":"Saint Martin","cases":"11","deaths":""},{"place":"Niger","cases":"10","deaths":"1"},{"place":"Bahamas","cases":"10","deaths":""},{"place":"Greenland","cases":"10","deaths":""},{"place":"Eswatini","cases":"9","deaths":""},{"place":"Cayman Islands","cases":"8","deaths":"1"},{"place":"CuraÃ§ao","cases":"8","deaths":"1"},{"place":"Guinea","cases":"8","deaths":""},{"place":"Haiti","cases":"8","deaths":""},{"place":"Myanmar","cases":"8","deaths":""},{"place":"Namibia","cases":"8","deaths":""},{"place":"Suriname","cases":"8","deaths":""},{"place":"Gabon","cases":"7","deaths":"1"},{"place":"Zimbabwe","cases":"7","deaths":"1"},{"place":"Antigua and Barbuda","cases":"7","deaths":""},{"place":"Grenada","cases":"7","deaths":""},{"place":"Mozambique","cases":"7","deaths":""},{"place":"Seychelles","cases":"7","deaths":""},{"place":"Benin","cases":"6","deaths":""},{"place":"Eritrea","cases":"6","deaths":""},{"place":"Laos","cases":"6","deaths":""},{"place":"Cabo Verde","cases":"5","deaths":"1"},{"place":"Guyana","cases":"5","deaths":"1"},{"place":"Sudan","cases":"5","deaths":"1"},{"place":"Nepal","cases":"5","deaths":""},{"place":"Fiji","cases":"5","deaths":""},{"place":"Mauritania","cases":"5","deaths":""},{"place":"Montserrat","cases":"5","deaths":""},{"place":"St. Barth","cases":"5","deaths":""},{"place":"Syria","cases":"5","deaths":""},{"place":"Nicaragua","cases":"4","deaths":"1"},{"place":"Angola","cases":"4","deaths":""},{"place":"Congo","cases":"4","deaths":""},{"place":"Vatican City","cases":"4","deaths":""},{"place":"Gambia","cases":"3","deaths":"1"},{"place":"Bhutan","cases":"3","deaths":""},{"place":"CAR","cases":"3","deaths":""},{"place":"Chad","cases":"3","deaths":""},{"place":"Liberia","cases":"3","deaths":""},{"place":"Saint Lucia","cases":"3","deaths":""},{"place":"Sint Maarten","cases":"3","deaths":""},{"place":"Somalia","cases":"3","deaths":""},{"place":"MS Zaandam","cases":"2","deaths":""},{"place":"Anguilla","cases":"2","deaths":""},{"place":"Belize","cases":"2","deaths":""},{"place":"British Virgin Islands","cases":"2","deaths":""},{"place":"Guinea-Bissau","cases":"2","deaths":""},{"place":"Saint Kitts and Nevis","cases":"2","deaths":""},{"place":"Turks and Caicos","cases":"2","deaths":""},{"place":"Libya","cases":"1","deaths":""},{"place":"Papua New Guinea","cases":"1","deaths":""},{"place":"St. Vincent Grenadines","cases":"1","deaths":""},{"place":"Timor-Leste","cases":"1","deaths":""},{"place":"Total:","cases":"620913","deaths":"28653"}];