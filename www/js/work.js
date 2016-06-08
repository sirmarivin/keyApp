// JavaScript Document
//stuff
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

var make = null
var model = null
var modelName = null
var webLink = null

var makeArray = ['acura','audi','buick','cadillac','chevrolet',
				 'chrysler','dodge','ford','honda',
				 'hyundai','infinite','jaguar','jeep','kia',
				 'lexus','lincoln','mazda','mitsubishi',
				 'subaru','toyota'];
				 
var acuraArray = [['mdx',2007,2013,20,'http://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['rl',2007,2010,23,'http://mysecuritypro.com/HondaHD111-PTKeyBlanks.aspx'],
				  ['tl',2007,2013,20,'http://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['rdx',2007,2012,20,'http://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx']]
var audiArray = [['immo2 system',1999,2003,34,'http://mysecuritypro.com/AudiHU66T6KeyBlanks.aspx'],
				 ['immo3 system',2003,2006,30,'http://mysecuritypro.com/VolkswagenHU66T6KeyBlanks.aspx']]
var buickArray = [['lacrosse',2007,2009,20,'http://mysecuritypro.com/GeneralMotorsPT04-PTKeyBlanks.aspx'],
				  ['lacrosse',2010,2012,31,'http://mysecuritypro.com/B119-PT.aspx'],
				  ['regal',2011,2013,30,'http://mysecuritypro.com/B119-PT.aspx'],
				  ['enclave',2007,2012,20,'http://mysecuritypro.com/GeneralMotorsB111-PTKeyBlanks.aspx']]
var cadillacArray = [['srx',2007,2009,20,'http://mysecuritypro.com/GeneralMotorsB111-PTKeyBlanks.aspx'],
					 ['srx',2010,2013,50,'http://mysecuritypro.com/HU100-GTK.aspx'],
					 ['escalade',2007,2013,20,'http://mysecuritypro.com/GeneralMotorsB111-PTKeyBlanks.aspx'],
					 ['cts',2014,2014,20,'http://mysecuritypro.com/GeneralMotorsB111-PTKeyBlanks.aspx']]
var chevroletArray = [['epica',2005,2007,30,'http://mysecuritypro.com/DW05T5.aspx'],
					  ['cruze',2011,2013,31,'http://mysecuritypro.com/B119-PT.aspx'],
					  ['volt',2011,2013,50,'http://mysecuritypro.com/HU100-GTK.aspx'],
					  ['camaro',2010,2013,31,'http://mysecuritypro.com/B119-PT.aspx'],
					  ['malibu',2007,2013,20,'http://mysecuritypro.com/GeneralMotorsB111-PTKeyBlanks.aspx']]
var chryslerArray = [['300',2007,2007,50,'http://mysecuritypro.com/Y160-GTK.aspx'],
					 ['300',2008,2012,23,'http://mysecuritypro.com/ChryslerY170-PTKeyBlanks.aspx'],
					 ['300c',2007,2008,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
					 ['300c',2009,2011,23,'http://mysecuritypro.com/ChryslerY170-PTKeyBlanks.aspx'],
					 ['sebring',2007,2011,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
					 ['pt cruiser',2007,2010,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx']]
var dodgeArray = [['journey',2009,2012,23,'https://mysecuritypro.com/ChryslerY170-PTKeyBlanks.aspx'],
				  ['caliber',2008,2012,20,'https://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
				  ['ram',2008,2012,50,'https://mysecuritypro.com/Y170-GTK.aspx']]
var fordArray = [['focus',2007,2011,27,'https://mysecuritypro.com/H92-PT.aspx'],
				 ['focus',2012,2013,57,'https://mysecuritypro.com/H94-PT.aspx'],
				 ['fiesta',2011,2013,57,'https://mysecuritypro.com/H94-PT.aspx'],
				 ['transit',2010,2016,57,'https://mysecuritypro.com/H94-PT.aspx'],
				 ['edge',2007,2013,27,'https://mysecuritypro.com/H92-PT.aspx'],
				 ['explorer',2011,2016,27,'https://mysecuritypro.com/H92-PT.aspx'],
				 ['taurus',2013,2013,27,'https://mysecuritypro.com/H92-PT.aspx'],
				 ['flex',2013,2013,27,'https://mysecuritypro.com/H92-PT.aspx']]
var hondaArray = [['civic',2007,2013,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['cr-z',2011,2013,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['cr-v',2007,2013,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['odyssey',2007,2013,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['crosstour',2010,2012,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx']
				  ['crosstour',2013,2013,32,'https://mysecuritypro.com/HO05-PT.aspx'],
				  ['accord',2007,2012,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx'],
				  ['accord',2013,2013,32,'https://mysecuritypro.com/HO05-PT.aspx'],
				  ['fit',2009,2013,20,'https://mysecuritypro.com/HondaHO03-PTKeyBlanks.aspx']]
var hyundaiArray = [['sonata',2011,2013,41,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
					['elantra',2009,2012,41,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
					['veracruz',2009,2012,38,'http://mysecuritypro.com/HyundaiHY15-PKeyBlanks.aspx'],
					['veloster',2012,2013,47,'http://mysecuritypro.com/HyundaiHY18-PKeyBlanks.aspx'],
					['santa fe',2013,2013,47,'http://mysecuritypro.com/HyundaiHY18R-PKeyBlanks.aspx'],
					['tucson',2012,2013,47,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
					['azera',2007,2013,41,'http://mysecuritypro.com/HyundaiHY20-PTKeyBlanks.aspx']]
var infiniteArray = [['g25',2011,2012,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html'],
					 ['g37',2008,2013,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html'],
					 ['jx',2013,2013,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html'],
					 ['ex',2007,2013,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html'],
					 ['fx',2007,2013,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html'],
					 ['qx',2007,2013,20,'http://www.infinitipartsdeal.com/infiniti-q60-parts.html']]
var jaguarArray = [['x-type',2007,2008,27,'http://mysecuritypro.com/JaguarFO21T7KeyBlanks.aspx'],
				   ['s-type',2007,2008,27,'http://mysecuritypro.com/JaguarFO21T7KeyBlanks.aspx'],
				   ['xj',2006,2009,27,'http://mysecuritypro.com/JaguarFO21T7KeyBlanks.aspx']]
var jeepArray = [['grand cherokee',2007,2008,53,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
			     ['grand cherokee',2009,2012,23,'http://mysecuritypro.com/ChryslerY170-PTKeyBlanks.aspx'],
				 ['liberty',2008,2012,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
				 ['wrangler',2008,2012,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
				 ['compass',2008,2012,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
				 ['patriot',2007,2012,20,'http://mysecuritypro.com/ChryslerY164-PTKeyBlanks.aspx'],
				 ['commander',2008,2010,23,'http://mysecuritypro.com/ChryslerY170-PTKeyBlanks.aspx']]
var kiaArray = [['rio',2010,2013,37,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
			   ['forte',2010,2013,29,'http://mysecuritypro.com/KiaKK8-PKeyBlanks.aspx'],
			   ['borrego',2009,2011,38,'http://mysecuritypro.com/HyundaiHY20-PTKeyBlanks.aspx'],
			   ['sorrento',2010,2013,38,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
			   ['optima',2010,2013,38,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx'],
			   ['sportage',2013,2013,38,'http://mysecuritypro.com/KiaKK10-PKeyBlanks.aspx']]
var lexusArray = [['gx470',2007,2010,29,'http://mysecuritypro.com/ToyotaTOY50-PTKeyBlanks.aspx'],
				  ['lx470',2007,2008,29,'http://mysecuritypro.com/ToyotaTOY50-PTKeyBlanks.aspx'],
				  ['rx330',2007,2009,29,'http://mysecuritypro.com/ToyotaTOY50-PTKeyBlanks.aspx'],
				  ['rx350',2007,2011,29,'http://mysecuritypro.com/ToyotaTOY50-PTKeyBlanks.aspx'],
				  ['sc430',2007,2011,29,'http://mysecuritypro.com/ToyotaTOY50-PTKeyBlanks.aspx']]
var lincolnArray = [['mkx',2007,2013,27,'http://mysecuritypro.com/H92-PT.aspx'],
					['mks',2010,2012,51,'http://www.ebay.com/itm/OEM-Transponder-Key-Blank-For-2009-2010-2011-2012-Lincoln-MKS-/291781873917?hash=item43ef8e10fd:g:m9UAAOxy3yNTh4iP&vxp=mtr#shpCntId'],
					['mkt',2010,2011,27,'http://mysecuritypro.com/H92-PT.aspx']]
var mazdaArray = [['mazda 2',2011,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['mazda 3',2007,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['mazda 5',2007,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['mazda 6',2007,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['rx8',2007,2011,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['mx5',2007,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['cx-5',2013,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx'],
				  ['cx-7',2007,2013,32,'http://mysecuritypro.com/MazdaMAZ24RT17KeyBlanks.aspx']]
var mitsubishiArray = [['outlander',2007,2013,23,'http://mysecuritypro.com/MitsubishiMIT17A-PTKeyBlanks.aspx'],
					   ['lancer',2007,2013,23,'http://mysecuritypro.com/MitsubishiMIT17A-PTKeyBlanks.aspx']]
var nissanArray = [['350z',2007,2009,20,'http://mysecuritypro.com/NissanInfinityNI04TKeyBlanks.aspx']]
var subaruArray = [['legacy',2007,2009,27,'http://mysecuritypro.com/SubaruSUB4-PTTransponderKeyBlanks.aspx'],
			       ['outback',2007,2009,27,'http://mysecuritypro.com/SubaruSUB4-PTTransponderKeyBlanks.aspx'],
				   ['tribeca',2007,2010,27,'http://mysecuritypro.com/SubaruSUB4-PTTransponderKeyBlanks.aspx'],
				   ['forester',2007,2008,27,'http://mysecuritypro.com/SubaruSUB4-PTTransponderKeyBlanks.aspx']]
var toyotaArray = [['camry',2007,2011,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['yaris',2007,2011,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['highlander',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['corolla',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['prius',2007,2008,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['fj cruiser',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['tundra',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['sienna',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['rav 4',2007,2010,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['land cruiser',2007,2008,32,'http://mysecuritypro.com/ToyotaTOY44D-PTKeyBlanks.aspx'],
				   ['camry',2012,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['yaris',2012,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['highlander',2011,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['corolla',2010,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['prius',2012,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['fj cruiser',2011,2014,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['tundra',2011,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['sienna',2011,2013,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx'],
				   ['rav 4',2011,2012,34,'http://mysecuritypro.com/ToyotaTOY44G-PTKeyBlanks.aspx']]

var modelArray = [acuraArray,audiArray,buickArray,cadillacArray,chevroletArray,
				  chryslerArray,dodgeArray,fordArray,hondaArray,
				  hyundaiArray,infiniteArray,jaguarArray,jeepArray,kiaArray,
				  lexusArray,lincolnArray,mazdaArray,mitsubishiArray,
				  subaruArray,toyotaArray];

function populateMakes(){
	var output = "";
	for(i = 0; i < makeArray.length; i++){
		output += "<p id = "+makeArray[i]+" onclick = 'changeMake("+i+")'>"+makeArray[i]+"</p>"
	}
	document.getElementById("makeDropdown").innerHTML = output;	
}

function populateModels(){
	var curModelArray = modelArray[make]
	var output = "";
	if(make || make == 0){
		for(i = 0; i < modelArray[make].length; i++){
			if(output.indexOf(curModelArray[i][0]) == -1){
				output += "<p id = "+curModelArray[i][0]+" onclick = 'changeModel("+i+")'>"+curModelArray[i][0]+"</p>";
			}
		}
	}
	else{
		window.alert("wuz duz fuz")	
	}
	document.getElementById("modelDropdown").innerHTML = output;		
}

function populateYears(){
	var output = ""
	var keeper = 0
	for(i = 0; i < modelArray[make].length; i++){
		var nameOfModel = modelArray[make][model][0]
		var nameOfOtherModel = modelArray[make][i][0]
		if(nameOfModel == nameOfOtherModel){
			var modelIF = modelArray[make][i]
			for(var o = 0; o <= modelIF[2] - modelIF[1]; o++,keeper++){
				output += "<div class = 'year' style = 'left:"+ ((keeper%2) * 47.5 + 5) +"%;top:"+(Math.floor(keeper*.5) * 70) +"px' "+
				         "onclick = chooseYear("+(modelIF[1] + o)+")>"+(modelIF[1] + o)+"</div>"
			}
		}
	}
	document.getElementById('yearsBox').innerHTML = output
}

function chooseYear(year){
	for(i = 0; i < modelArray[make].length; i++){
		if((modelName == modelArray[make][i][0]) && 
		   (year >= modelArray[make][i][1]) &&
		   (year <= modelArray[make][i][2])){
			   document.getElementById('desc').style.top = ($(window).height() - 120) + 'px';
				document.getElementById('price').innerHTML = "Price: $" + modelArray[make][i][3]
				document.getElementById('link').innerHTML = "Buy It"
				webLink = modelArray[make][i][4]
		  } 
	}
}

function linkClick(){
	window.open(webLink,'_blank','location=yes','closebuttoncaption=Return')
}

function makeDD() {
	if(document.getElementById('modelDropdown').classList.contains('show')){
		document.getElementById('modelDropdown').classList.remove('show');
	}
    document.getElementById("makeDropdown").classList.toggle("show");
}
function modelDD(){
	if(document.getElementById('makeDropdown').classList.contains('show')){
		document.getElementById('makeDropdown').classList.remove('show');
	}
	populateModels();
    document.getElementById("modelDropdown").classList.toggle("show");
}
function changeMake(newMake){
	make = newMake
	document.getElementById("makeButton").innerHTML = makeArray[make].toUpperCase();
	document.getElementById("modelButton").innerHTML = "MODEL";
	document.getElementById("yearsBox").innerHTML = "";
	document.getElementById("price").innerHTML = "";
	document.getElementById("link").innerHTML = "";
}

function changeModel(newModel){
	model = newModel
	modelName = modelArray[make][model][0]
	document.getElementById("modelButton").innerHTML = modelArray[make][model][0].toUpperCase();
	populateYears()
	//var yearCount = $('.year').length
	//$('#yearsBox').height(Math.floor((yearCount + 1)*.5) * 70 + 120)
	document.getElementById("price").innerHTML = "";
	document.getElementById("link").innerHTML = "";
}

function arrayToDropDownOptions(array){
	var modelString = "";
	for(i = 0; i < array.length; i++){
		modelString += "<p id = "+array[i]+">"+array[i]+"</p>";	
	}
	return modelString;
}

var ref = null;
function openInAppBrowserBlank(url)
{
    try {
ref = window.open(encodeURI(url),'_blank','location=no'); //encode is needed if you want to send a variable with your link if not you can use ref = window.open(url,'_blank','location=no');
         ref.addEventListener('loadstop', LoadStop);
         ref.addEventListener('exit', Close);
    }
    catch (err)    
    {
        alert(err);
    }
}
function LoadStop(event) {
         if(event.url == "http://www.mypage.com/closeInAppBrowser.html"){
            // alert("fun load stop runs");
             ref.close();
         }    
    }
function Close(event) {
         ref.removeEventListener('loadstop', LoadStop);
         ref.removeEventListener('exit', Close);
    } 

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


populateMakes()
