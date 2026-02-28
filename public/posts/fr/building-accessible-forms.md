Les formulaires accessibles ne sont pas un « plus ». Ce sont des surfaces d’interaction centrales dans tout produit : authentification, paiement, onboarding, paramètres et collecte de données. Si un formulaire n’est pas accessible, votre produit n’est pas utilisable.

Ce guide explique comment créer des formulaires accessibles d’un point de vue ingénierie, en s’alignant sur les Web Content Accessibility Guidelines (WCAG 2.x) et sur des patterns d’implémentation frontend concrets.

## 1. Commencer par la sémantique, pas par ARIA

Première règle des formulaires accessibles : utiliser correctement le HTML natif avant d’ajouter ARIA.

### Association correcte des labels

Chaque champ doit avoir un label associé de manière programmatique.

```html
<label for="email">Adresse e-mail</label>
<input id="email" name="email" type="email" />
```

Pourquoi c’est important :

- Les lecteurs d’écran annoncent le label quand le champ reçoit le focus.
- La zone cliquable est plus grande (meilleure UX).
- Les utilisateurs de contrôle vocal peuvent référencer le champ par son label.

Évitez les labels uniquement via placeholder :

```html
<input placeholder="Adresse e-mail" />
```

Les placeholders :

- Disparaissent à la saisie
- Ont un contraste faible
- Ne sont pas des noms accessibles fiables

## 2. Regrouper correctement les champs liés

Pour les contrôles groupés (boutons radio, cases à cocher), utilisez `<fieldset>` et `<legend>`.

```html
<fieldset>
  <legend>Méthode de contact préférée</legend>

  <label>
    <input type="radio" name="contact" value="email" />
    E-mail
  </label>

  <label>
    <input type="radio" name="contact" value="phone" />
    Téléphone
  </label>
</fieldset>
```

Sans `<legend>`, les utilisateurs de lecteurs d’écran perdent le contexte.

## 3. Gestion des erreurs : accessible et prévisible

La gestion des erreurs est l’un des points où beaucoup de formulaires échouent en accessibilité.

WCAG exige :

- Les erreurs doivent être identifiées
- Les erreurs doivent être décrites
- Les instructions doivent être claires

### Exemple d’erreur inline

```html
<label for="password">Mot de passe</label>
<input
  id="password"
  name="password"
  type="password"
  aria-describedby="password-error"
  aria-invalid="true"
/>
<p id="password-error">Le mot de passe doit contenir au moins 8 caractères.</p>
```

Principes clés :

- Utilisez `aria-invalid="true"` uniquement quand le champ est invalide
- Reliez l’erreur avec `aria-describedby`
- Assurez-vous que le texte d’erreur est visible (pas seulement pour lecteur d’écran)

### Ne pas se reposer uniquement sur la couleur

Si votre état d’erreur est seulement « bordure rouge », il échoue au critère WCAG 1.4.1 (Use of Color).

Combinez toujours :

- Couleur
- Icône
- Explication textuelle

## 4. Champs obligatoires : communiquer clairement

Évitez toute ambiguïté.

Au lieu de :

```html
<label>E-mail</label>
```

Utilisez :

```html
<label for="email">
  E-mail <span aria-hidden="true">*</span>
</label>
```

Et précisez en haut du formulaire :

> Les champs marqués d’un * sont obligatoires.

Vous pouvez aussi utiliser :

```html
<input required />
```

Mais ne vous reposez jamais uniquement sur l’attribut `required` pour communiquer.

## 5. L’accessibilité clavier est non négociable

Les utilisateurs doivent pouvoir :

- Naviguer entre les champs avec Tab
- Voir un indicateur de focus visible
- Soumettre au clavier
- Accéder à tous les éléments interactifs

À éviter :

- Supprimer les styles de focus (`outline: none`)
- Créer des composants custom sans support clavier

Si vous développez des sélecteurs personnalisés ou des date pickers, suivez les WAI-ARIA Authoring Practices du World Wide Web Consortium (W3C).

Encore mieux : privilégiez les contrôles natifs dès que possible.

## 6. Le calcul du nom accessible est important

Les lecteurs d’écran calculent un « nom accessible » à partir de :

- `<label>`
- `aria-label`
- `aria-labelledby`

La hiérarchie est importante.

Mauvais :

```html
<input aria-label="Saisir e-mail" />
```

Quand un label visible existe déjà.

Bonne règle :

- Si un texte visible existe → utilisez `<label>`
- S’il n’y a pas de label visible → utilisez `aria-label`
- Pour les cas complexes → utilisez `aria-labelledby`

## 7. Stratégie de timing et de validation

Évitez la validation agressive en temps réel qui :

- Se déclenche à chaque frappe
- Interrompt la saisie
- Déplace le focus de façon inattendue

Meilleur pattern :

- Valider au blur
- Valider au submit
- Fournir un résumé des erreurs en haut

### Pattern de résumé d’erreurs

```html
<div role="alert">
  <h2>Il y a des erreurs dans votre soumission</h2>
  <ul>
    <li><a href="#email">L’e-mail est obligatoire</a></li>
    <li><a href="#password">Le mot de passe doit comporter 8 caractères</a></li>
  </ul>
</div>
```

- Utilisez `role="alert"` pour l’annonce
- Liez les erreurs aux champs correspondants
- Déplacez le focus vers le résumé après un échec de soumission

## 8. Formulaires accessibles en React

Erreurs fréquentes dans les apps React :

- Inputs personnalisés sans `id` correct
- `htmlFor` manquant
- Association label/champ cassée par l’abstraction de composants

Pattern correct :

```jsx
function TextField({ id, label, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <p id={`${id}-error`}>{error}</p>}
    </div>
  );
}
```

Les abstractions doivent préserver :

- Un mapping explicite des IDs
- Le lien vers les descriptions accessibles
- Une structure DOM prévisible

## 9. Stratégie de test

Les formulaires accessibles exigent des tests à plusieurs niveaux :

1. **Automatisés**
   - axe
   - Lighthouse
2. **Tests clavier manuels**
   - Navigation Tab
   - Shift + Tab
   - Activation Entrée / Espace
3. **Tests lecteur d’écran**
   - NVDA (Windows)
   - VoiceOver (macOS / iOS)
4. **Cas limites**
   - Zoom à 200 %
   - Mode contraste élevé
   - Préférences de réduction des animations

## 10. Enjeu business : pourquoi c’est important

Les formulaires accessibles :

- Augmentent les taux de conversion
- Réduisent la frustration utilisateur
- Améliorent le SEO
- Réduisent l’exposition juridique (notamment en UE avec des cadres alignés WCAG)

L’accessibilité n’est pas une mise en conformité de façade. C’est de l’ingénierie de qualité produit.

## Conclusion

Créer des formulaires accessibles, ce n’est pas saupoudrer des attributs ARIA. C’est :

- Une sémantique correcte
- Une communication claire
- Une interaction prévisible
- Une gestion d’erreur robuste
- Des tests inclusifs

Si votre formulaire ne peut pas être complété uniquement au clavier et avec un lecteur d’écran, il n’est pas prêt pour la production.
