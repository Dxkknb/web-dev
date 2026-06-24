# 🎮 Guessing Game

Un petit jeu en JavaScript dans lequel le joueur doit deviner un nombre aléatoire généré par l'ordinateur.

## 📌 Principe du jeu

1. L'ordinateur génère un nombre aléatoire compris entre **1** et **10**.
2. Le joueur saisit un nombre entre **1** et **10**.
3. Le programme compare la valeur saisie avec le nombre à deviner.
4. Si le joueur trouve le bon nombre :

    * il gagne **1 point** ;
    * son score est mis à jour ;
    * le programme lui demande s'il souhaite continuer la partie.
5. Si le joueur décide de continuer :

    * un nouveau nombre aléatoire est généré ;
    * une nouvelle manche commence.
6. Si le joueur décide d'arrêter, le jeu se termine et le score final est affiché.

## 🏆 Système de points

* Chaque nombre correctement deviné rapporte **1 point**.
* Le score est conservé pendant toute la durée de la partie.


## ▶️ Exemple d'exécution

```
Devinez un nombre entre 1 et 10 : 7
Bravo ! Vous avez trouvé le bon nombre.
Score : 1

Voulez-vous continuer ? (o/n) : o

Devinez un nombre entre 1 et 10 : 3
Dommage ! Le nombre à deviner était 8.

Voulez-vous continuer ? (o/n) : n

Merci d'avoir joué !
Score final : 1
```
