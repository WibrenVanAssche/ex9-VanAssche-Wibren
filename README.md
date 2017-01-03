![alt text](http://www.thomasmore.be/sites/www.thomasmore.be/files/media/tm_vignet_web.png "Thomas More")
---
# ex9-VanAssche-Wibren

##disclaimer
Ik ben begonnen met de code die we in de klas hadden gezien maar had enorm veel problemen van errors en vond de oplossingen niet snel genoeg. 
Ben dan mongoose beginnen te gebruiken omdat Jonas dit aanraadde.

Heb de code van Jonas ook als basis gebruikt evenals de tutorials die in zijn readme staan.


###inhoud

Een API die kan gebruikt worden om het effect van bepaalde acties te monitoren. 
* vb: zorgt een lunchactie ervoor dat er meer mensen in de cafetaria aanwezig zijn?

Kan ook gebruikt worden om het gebruik van de refter te analyseren.
* vb: beter spreiden van lunchbreaks over verschillende richtingen/jaren.

---
####Bronnen

http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

https://www.npmjs.com/package/mongoose

http://mongoosejs.com/docs/models.html

---
###Locations+Products+Sales

vreemd probleem: tijdens eerste get via mongoose werd mijn zelf aangemaakte 
'Locations' collectie steeds genegeerd en werd er steed een 'locations' aangemaakt.

De reden niet gevonden dus heb ik gewoon 'Locations' renamed naar 'locations'

---
Bij aanmaken van data via POST Locations merk ik dat er een _V bij komt in mongodb
Dit is blijkbaar een versionkey. Ik laat hem gewoon staan. Kan afgezet worden door in het schema
{ versionKey: false } bij te zetten.
http://mongoosejs.com/docs/guide.html#versionKey

---
update:
http://stackoverflow.com/questions/32811510/mongoose-findoneandupdate-doesnt-return-updated-document

----
validatie wordt deels al gedaan door mongoose maar de errormessages hiervan zijn vaak nogal vaag. 
Ik voeg dus nog een paar extra checks toe zodat we makkelijker het probleem kunnen opsporen.
---
Voor het toevoegen van de productid's in de array bij Sales heb ik niet de echte ID's van products ingevoegd.
Dit werd wel aangehaald in de laatste onderstaande bron maar ik heb er voor gekozen om dit in deze oplevering nog niet te implementeren.

http://www.w3schools.com/js/js_datatypes.asp

http://mongoosejs.com/docs/2.7.x/docs/schematypes.html

http://jasonjl.me/blog/2014/10/23/adding-validation-for-embedded-objects-in-mongoose/ 
---
Ik heb voor dit project veel input gegeven aan en gekregen van zowel Jeroen als Thomas. 
Onze cases liggen dicht bij elkaar (zelfde begin in les) dus was het makkelijker om elkaars problemen te snappen. 
Wel hebben we alle 3 individueel de taak gemaakt (te zien aan onze commits). 
Door hen met bepaalde problemen te helpen heb ik extra inzicht gekregen in de werking en mogelijke problemen van dit soort projecten.


