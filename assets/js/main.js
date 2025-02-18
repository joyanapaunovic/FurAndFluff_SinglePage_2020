
//header, #navigation
var navigacija = document.getElementById('navigation');
var nizImeLinka = new Array('Home', 'Find a dog / cat', 'Adoption Info', 'Get Involved');
var nizAdresaLinka = new Array('', '#pet-info-profiles', '#adoption-info', '#getInvolved');
for(var i = 0; i<nizImeLinka.length; i++){
    var lista = document.createElement('ul');
    lista.setAttribute('class', 'nav');
    var deloviListe = document.createElement('li');
    var linkovi = `<a href="${nizAdresaLinka[i]}"> ${nizImeLinka[i]} </a>`;
    deloviListe.innerHTML = linkovi;
    lista.appendChild(deloviListe);
    navigacija.insertBefore(lista, null);
}
// console.log(navigacija);


/* AFTER SLIDER */
var divInformacije = document.getElementsByClassName('information');
var infoNaslovi = ['Questions for New Adopters', 'COVID-19 Resources'];
var infoTekst = ['If you\'re thinking about adopting a pet, you are embarking on a wonderful and rewarding relationship. Adopting a new pet comes with a lot of change for both pet and pet parent, we’ve compiled a checklist to help make the transition as smooth as possible.', 'While Coronavirus/COVID-19 has many of us practicing social distancing or settling into shelter in place, there are still thousands of dogs and cats that need our help. Luckily, there are still plenty of ways you can support the them — and the groups that care for them.'];
var klikTekst1 = [' Do you have any other pets and how will they react to a new pet? Is your current residence suited to the pet you’re considering? How will your social life or work obligations affect your ability to care for a pet?', 'Do you have a plan for your new pet during vacations and/or work travel? How do the people you live with feel about having a pet in the house? Are you intolerant of hair, dirt and other realities of sharing your home with a pet, such as allergies? Do you or any of your household/family members have health issues that may be affected by a pet? What breed, or species, of animal is the best fit with your current lifestyle?'];
var klikTekst2 = ['COVID-19 has undoubtedly had a large impact on the animal welfare community. Adoption processes are changing, both shelter and rescue groups are adopting as best they can, but one thing is still the same: homeless pets still need the help of people like you.', 'Is it okay to adopt a dog or cat during the COVID-19 pandemic? How do you reach out to ask around coronavirus? And, are there ways to help pets in need right now without adopting or fostering? The pet adoption process has certainly changed a lot over the last few months, but it’s still possible to adopt a new best friend, despite limitations due to COVID-19. Many shelters and rescues are embracing technology to assist with the adoption process. Adoptions can still be completed safely with social distancing in mind.'];
var readMore = ['Read more'];
for(var i=0; i<infoNaslovi.length; i++){
    if(i==0){
        divInformacije[i].innerHTML = `<span class='titleSecond'>${infoNaslovi[i]}</span><p class='main'>${infoTekst[i]}</p><div id='text1'><p>${klikTekst1[i]}</p><p>${klikTekst1[i+1]}</p></div><div class='readMore'><a id='readMore1'>${readMore[i]}</a></div></div>`;
        //console.log(divInformacije[i]);
    }
    if(i==1){
        divInformacije[i].innerHTML = `<span class='titleSecond'>${infoNaslovi[i]}</span><p class='main'>${infoTekst[i]}</p><div id='text2'><p>${klikTekst2[i-1]}</p><p>${klikTekst2[i]}</p></div><div class='readMore'><a id='readMore2'>${readMore[i-1]}</a></div></div>`;
        //console.log(divInformacije[i]);
    }
}


/*PETS AVAILABLE FOR ADOPTION*/

//buster 1
var photoChange = document.querySelector('.pet-img #rottweiler');
photoChange.addEventListener("mouseover", function(){
    photoChange.src = "assets/img/rottweiler2.gif";
});
photoChange.addEventListener("mouseout", function(){
    photoChange.src = "assets/img/rottweiler1.jpg";
});


// charlie 2
var photoChange2 = document.querySelector('.pet-img #labrador');
photoChange2.addEventListener("mouseover", function(){
    photoChange2.src = "assets/img/labrador2.gif";
});
photoChange2.addEventListener("mouseout", function(){
    photoChange2.src = "assets/img/labrador1.gif";
});
//luna 3
var photoChange3 = document.querySelector('.pet-img #pixiBob');
photoChange3.addEventListener("mouseover", function(){
    photoChange3.src = "assets/img/pixibob2.gif";
});
photoChange3.addEventListener("mouseout", function(){
    photoChange3.src = "assets/img/pixibob1.gif";
});

//starlet 4

var photoChange4 = document.querySelector('.pet-img #persianCat');
photoChange4.addEventListener("mouseover", function(){
    photoChange4.src = "assets/img/persiancat2.gif";
});
photoChange4.addEventListener("mouseout", function(){
    photoChange4.src = "assets/img/persiancat1.gif";
});

//scout and sam 
var photoChange5 = document.querySelector('.pet-img #manksCats');
photoChange5.addEventListener("mouseover", function(){
    photoChange5.src = "assets/img/manksCats2.jpeg";
});
photoChange5.addEventListener("mouseout", function(){
    photoChange5.src = "assets/img/manksCats1.gif";
});


//harry 6
var photoChange6 = document.querySelector('.pet-img #borderColli');
photoChange6.addEventListener("mouseover", function(){
    photoChange6.src = "assets/img/bordercolli2.gif";
});
photoChange6.addEventListener("mouseout", function(){
    photoChange6.src = "assets/img/bordercolli1.gif";
});

//hula 7
var photoChange7 = document.querySelector('.pet-img #springerSpanel');
photoChange7.addEventListener("mouseover", function(){
    photoChange7.src = "assets/img/springer spanel2.gif";
});
photoChange7.addEventListener("mouseout", function(){
    photoChange7.src = "assets/img/springer spanel.gif";
});


//tobby 8

var photoChange8 = document.querySelector('.pet-img #beagle');
photoChange8.addEventListener("mouseover", function(){
    photoChange8.src = "assets/img/beagle2.gif";
});
photoChange8.addEventListener("mouseout", function(){
    photoChange8.src = "assets/img/beagle1.gif";
});


/* GET-INVOLVED */
var klasaWay = document.getElementsByClassName('way');
var naslovi = ['Volunteering', 'Donations', 'Social PETworking on Instagram, Facebook &#38; Twitter'];
var tekstovi= ['Volunteering is a great way to help pets in need and meet other caring humans like you! There are a number of opportunities to lend a helping paw to shelters and rescue groups near you.', 
'Will homeless dogs and cats have a chance to find a home? For a homeless dog or cat, part of the problem is being seen, so that compassionate people like you know that they need a home! Your tax-deductible contribution gives them a chance to be noticed, so please donate today!',
'You can save a life right now by helping shelter pets get seen on your favorite networking sites! Just use our site to search for a dog or a cat that needs a home. Choose a pet you want to help and click to get their info. Then, just click and share to help the pet get seen and adopted!'
];
for(var i=0; i<naslovi.length; i++){
    if(i==0){
        klasaWay[i].innerHTML = `<h4 class='titleWay'>${naslovi[i]}</h4><p>${tekstovi[i]}</p>`;
        //console.log(klasaWay[i]);
    }
    else if(i==1){
        klasaWay[i].innerHTML = `<h4 class='titleWay'>${naslovi[i]}</h4><p>${tekstovi[i]}</p>`;
        //console.log(klasaWay[i]);
    }
    else if(i==2){
        klasaWay[i].innerHTML = `<h4 class='titleWay'>${naslovi[i]}</h4><p>${tekstovi[i]}</p>`;
        //console.log(klasaWay[i]);
    }
}

//validacija forme
//ime regex
var ime = document.getElementById('IDfirstName');
var proveraIme = /^[A-Z][a-z]{2,10}$/;
//prezime regex
var prezime = document.getElementById('IDlastName');
var proveraPrezime = /^[A-Z][a-z]{2,10}$/;
//email
var email = document.getElementById('IDemail');
var proveraEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
//dugme i span
var dugmeForma = document.getElementById('adoptBTN');
var spanInfo = document.getElementsByClassName('spanText');
dugmeForma.addEventListener('click', function(){
        //ime
        if(!proveraIme.test(ime.value)){
            ime.classList.add('error');
            spanInfo[0].innerHTML = 'This field must be at least 3 characters. (Example: John)';
        }
        else{
            ime.classList.remove('error');
            spanInfo[0].innerHTML = '';
        }
        //prezime
        if(!proveraPrezime.test(prezime.value)){
            prezime.classList.add('error');
            spanInfo[1].innerHTML = 'This field must be at least 3 characters. (Example: Sonmez)';
        }
        else{
            prezime.classList.remove('error');
            spanInfo[1].innerHTML = '';
        }
        //email
        if(!proveraEmail.test(email.value)){
            email.classList.add('error');
            spanInfo[2].innerHTML = 'Example: john-sonmez_123.456@gmail.com';
        }
        else{
            email.classList.remove('error');
            spanInfo[2].innerHTML = '';
        }
    });

