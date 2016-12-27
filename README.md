![alt text](http://www.thomasmore.be/sites/www.thomasmore.be/files/media/tm_vignet_web.png "Thomas More")
---
# ex9-VanAssche-Wibren

###inhoud

####Code
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
