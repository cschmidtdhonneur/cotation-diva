# Cotation DIVA

Application locale pour coter une grille DIVA adulte ou Young DIVA-5 pendant l'entretien.

## Utilisation simple

Ouvrir `index.html` dans un navigateur suffit pour :

- choisir DIVA adulte ou Young DIVA-5 ;
- cocher les éléments rapportés ;
- noter les éléments cliniques ;
- coter chaque item en Oui / Non / N/A ;
- exporter en PDF avec le bouton `Exporter PDF` ;
- télécharger ou importer une sauvegarde JSON.

## Sauvegarde automatique sur l'ordinateur

Pour écrire automatiquement les sauvegardes dans le dossier `sauvegardes`, lancer :

```bash
python3 server.py
```

Puis ouvrir :

```text
http://localhost:4173
```

Les fichiers JSON créés dans `sauvegardes/` contiennent des données cliniques. Ce dossier est ignoré par Git et ne doit pas être publié.

## Publication GitHub Pages

GitHub Pages peut publier les fichiers statiques :

- `index.html`
- `styles.css`
- `app.js`

Sur GitHub Pages, l'app garde l'export PDF, le téléchargement et l'import de sauvegarde JSON. La sauvegarde automatique directe dans un dossier de l'ordinateur nécessite `server.py` en local.
