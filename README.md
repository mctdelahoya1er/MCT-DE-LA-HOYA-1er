# Site web — MCT DE LA HOYA 1er / NAM NÈ NAM GOSPEL

## Structure du projet

```
mct-project/
├── index.html          → page unique du site (toutes les sections)
├── assets/
│   ├── css/style.css   → tous les styles
│   ├── js/main.js      → interactions (menu mobile, formes d'onde, FAQ)
│   └── img/            → à remplir avec les vrais visuels (logo, photos, pochettes)
├── robots.txt          → indexation par les moteurs de recherche
├── sitemap.xml          → plan du site pour Google
├── netlify.toml         → configuration de déploiement (si hébergé sur Netlify)
└── README.md
```

Le site est actuellement une page unique (one-page) avec des ancres de navigation
(#accueil, #musique, #contact, etc.). C'est un choix technique : plus simple à
maintenir, plus rapide à charger, et adapté à un budget encore à définir.

## Ce qu'il reste à faire avant mise en ligne

1. Remplacer les blocs placeholder dans `assets/img/` par les vrais fichiers
   (logo NAM NÈ NAM GOSPEL, photos de l'artiste, pochettes d'albums).
2. Remplacer les liens `#` des réseaux sociaux par les vraies URLs
   (Facebook, TikTok, Instagram, YouTube, LinkedIn, Spotify).
3. Remplacer `VOTRE-DOMAINE.com` dans `robots.txt` et `sitemap.xml` par le
   nom de domaine réel une fois choisi.
4. Ajouter les vrais fichiers audio ou liens de streaming pour le lecteur musique.

## Options d'hébergement recommandées

Le site est 100% statique (HTML/CSS/JS, pas de base de données), ce qui ouvre
plusieurs options simples et peu coûteuses :

| Option | Coût | Complexité | Remarque |
|---|---|---|---|
| **Netlify** | Gratuit (offre de base) | Faible | Glisser-déposer le dossier, HTTPS automatique, config déjà prête (`netlify.toml`) |
| **Vercel** | Gratuit (offre de base) | Faible | Équivalent à Netlify |
| **GitHub Pages** | Gratuit | Faible | Nécessite un compte GitHub |
| **Hébergeur camerounais/mutualisé** (cPanel) | Payant (variable) | Moyenne | Utile si le client veut un hébergement local et une facturation en FCFA |

Pour un budget encore "à définir", je recommande de démarrer sur **Netlify**
(gratuit, HTTPS inclus, mise en ligne en quelques minutes) le temps de valider
le site avec le client, puis de migrer vers un hébergement payant si des
besoins supplémentaires apparaissent (formulaire de contact avec base de
données, boutique en ligne, etc.).

## Nom de domaine

Non choisi à ce stade. Suggestions à valider avec le client :
- mctdelahoya1er.com
- namnenamgospel.com

## Déploiement (une fois le domaine et l'hébergeur choisis)

**Sur Netlify :**
1. Créer un compte sur netlify.com
2. Glisser le dossier `mct-project` sur l'interface "Deploy"
3. Relier le nom de domaine dans Domain settings
4. Le HTTPS est activé automatiquement

**Sur un hébergement cPanel classique :**
1. Se connecter au gestionnaire de fichiers ou via FTP
2. Uploader le contenu du dossier `mct-project` dans `public_html/`
3. Activer le certificat SSL (souvent gratuit via Let's Encrypt, proposé par l'hébergeur)

## Maintenance et évolutions prévues

- Ajout futur de nouvelles chansons, vidéos et actualités (le site est conçu
  pour évoluer avec les projets de l'artiste)
- Version anglaise à ajouter dans un second temps
- Sauvegardes : conserver une copie de ce dossier (ou un dépôt Git) à chaque
  mise à jour importante
