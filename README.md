Projet 1

Demande :
 je pris de m’accorder un temps supplémentaire pour fini mon projet car je n’est pas pu finir la totalité des fonctionnalités après  avoir eu beaucoup de difficultés pour avancer.


Mon projet forum permet d’effectuer les fonctionnalités suivantes :
- Afficher la liste des questions
-Ajouter une nouvelle question
-Afficher les réponses d’une question
-Répondre a une question
- Supprimer une question
-Faire une recherche d’une question dans la page des questions
-Faire une recherche d’une réponse dans la liste des réponses

Mon projet se compose de deux parties :
 -Une partie serveur sous /var/www/html/
avec slimframwork3( https://www.slimframework.com/docs/v3/start/installation.html ),
pour la partie serveur j’ai installer appache2,Mysql et phpmyadmin pour la base de donnée
j’ai crée sous le dossier etc/apache2/sites-available un dossier projet.conf pour configurer mon chemin pour apache comme ceci 
<VirtualHost *:80>
	DocumentRoot "/var/www/html/serveur/public/index.php/"
	ServerName forum
</VirtualHost>
Aussi j’ai crée une aliace de localhost que j’ai appelé ‘forum’ dans le ficher etc/hosts
//pour afficher la liste des questions en json sur le navigateur il faut taper ‘forum/api/questions’

 -Une partie client avec angularjssous sous /var/www/html/

Particularité :
j’ai installer une extension sur chrome pour éviter les problème de cross-origin :
Allow-Control-Allow-Origin: *




