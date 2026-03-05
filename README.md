# Sakai

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment (GitHub Pages)

Pour déployer le site sur GitHub Pages, suivez ces étapes :

1. **Build du projet avec le bon base-href** :
   ```bash
   ng build --configuration production --base-href /interface-image/
   ```

2. **Copier index.html vers 404.html** (pour gérer le routage SPA) :
   ```bash
   copy dist\sakai-ng\index.html dist\sakai-ng\404.html
   ```

3. **Déployer sur GitHub Pages** :
   ```bash
   npx angular-cli-ghpages --dir=dist/sakai-ng
   ```

4. **Accéder au site** :
   Le site est disponible à l'adresse : https://antoninmart.github.io/interface-image/

> **Note** : Le déploiement peut prendre quelques minutes avant d'être visible. Si vous rencontrez des erreurs 404, videz le cache de votre navigateur ou ouvrez le site en navigation privée.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
