# L’intersection entre performance et accessibilité

La performance et l’accessibilité sont souvent traitées comme des sujets séparés. En pratique, elles sont étroitement liées.

Une application rapide mais inutilisable avec des technologies d’assistance est excluante.
Une application accessible mais extrêmement lente est inutilisable dans des conditions réelles.

Cet article explore comment **l’ingénierie de la performance et l’ingénierie de l’accessibilité se renforcent mutuellement**, et où elles peuvent entrer en conflit si elles sont mal implémentées.

---

## 1. La performance perçue *est* de l’accessibilité

La performance ne se résume pas aux scores Lighthouse. Elle impacte directement :

- Les utilisateurs avec une connexion bas débit
- Les utilisateurs sur des appareils anciens
- Les utilisateurs de lecteurs d’écran
- Les utilisateurs avec des troubles cognitifs

Des temps de chargement longs augmentent la charge cognitive. Les décalages de mise en page désorientent les utilisateurs de lecteurs d’écran et de navigation clavier.

Les Core Web Vitals (tels que définis par Google) — LCP, CLS, INP — ont un impact sur l’utilisabilité pour tout le monde.

Un décalage de mise en page (CLS) n’est pas seulement une régression de métrique. Il peut :

- Déplacer le focus de manière inattendue
- Déplacer le contenu sous le curseur
- Casser les hypothèses sur l’ordre de lecture

---

## 2. Le surplus de JavaScript pénalise les utilisateurs de technologies d’assistance

Un rendu client lourd impacte :

- Le Time to Interactive (TTI)
- Les délais d’hydratation
- La réactivité des lecteurs d’écran

Quand une application React s’hydrate lentement, les technologies d’assistance peuvent :

- Annoncer un DOM incomplet
- Manquer des mises à jour dynamiques
- Ralentir pendant la navigation

Réduire la taille du bundle JavaScript améliore :

- La première interaction significative
- La fiabilité des technologies d’assistance
- La consommation de batterie sur mobile

**Un code accessible est souvent un code plus simple.**

---

## 3. Le HTML sémantique améliore à la fois performance et accessibilité

Avec du HTML natif :

```html
<button>Submit</button>
```

Au lieu de :

```html
<div role="button" tabindex="0">Submit</div>
```

Bénéfices :

- Moins de JavaScript
- Support clavier intégré
- Sémantique d’accessibilité intégrée
- Logique d’exécution plus légère

Les contrôles natifs sont :

- Plus rapides à rendre
- Plus simples à maintenir
- Plus prévisibles pour les technologies d’assistance

La sémantique réduit la complexité.

---

## 4. Chargement différé : attention

Le lazy loading améliore la performance — mais peut dégrader l’accessibilité s’il est mal utilisé.

### Images

Bon :

```html
<img src="hero.jpg" alt="Team collaborating in an office" loading="lazy" />
```

Mauvais :

- Charger en différé des images critiques au-dessus de la ligne de flottaison
- Charger en différé des visuels pédagogiques essentiels

Les lecteurs d’écran dépendent de la présence du DOM. Si le contenu arrive trop tard ou de façon imprévisible, le contexte se casse.

---

## 5. Gestion du focus et stratégie de rendu

Les re-rendus côté client peuvent :

- Supprimer les éléments focalisés
- Recréer des nœuds DOM
- Réinitialiser la position de scroll

Cela affecte :

- Les utilisateurs clavier
- Les utilisateurs de lecteurs d’écran
- Les utilisateurs avec des troubles moteurs

En React :

```jsx
{isOpen && <Modal />}
```

Si ce n’est pas géré correctement :

- Le focus peut disparaître
- L’état peut être réinitialisé
- Les annonces peuvent ne pas se déclencher

L’optimisation des performances doit préserver :

- Des clés stables
- Une structure DOM prévisible
- La continuité du focus

---

## 6. Skeleton screens vs. lecteurs d’écran

Les skeleton loaders améliorent visuellement la performance perçue.

Mais les lecteurs d’écran peuvent :

- Annoncer des placeholders sans signification
- Réannoncer le contenu lorsqu’il est remplacé

Meilleur pattern :

```html
<div aria-busy="true">
  <!-- loading state -->
</div>
```

Quand c’est terminé :

```html
<div aria-busy="false">
  <!-- real content -->
</div>
```

Utilisez `aria-busy` pour communiquer l’état de chargement.

---

## 7. Animations et réduction de mouvement

Les animations impactent :

- La performance CPU
- L’accessibilité cognitive
- Les troubles vestibulaires

Respectez les préférences utilisateur :

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

La media query `prefers-reduced-motion` est à la fois :

- Une fonctionnalité d’accessibilité
- Une optimisation de performance

Moins d’animation = moins de layout thrashing.

---

## 8. Scroll infini vs. pagination

Le scroll infini peut :

- Casser la navigation clavier
- Perturber le flux du lecteur d’écran
- Créer des goulots d’étranglement de performance

La pagination :

- Améliore la performance
- Préserve les repères de navigation
- Fournit une structure prévisible

Si vous utilisez le scroll infini :

- Fournissez un bouton « Charger plus »
- Maintenez la position du focus
- Annoncez le nouveau contenu via `aria-live`

---

## 9. L’accessibilité réduit le rework

Ignorer l’accessibilité tôt conduit à :

- Réécrire des composants
- Réarchitecturer la logique d’interaction
- Introduire des régressions de performance lors des correctifs

Une architecture accessible tend à :

- Utiliser un DOM plus simple
- Éviter les abstractions inutiles
- Réduire la surcharge JavaScript

L’efficacité d’ingénierie s’améliore.

---

## 10. Impact réglementaire et business

Les standards d’accessibilité tels que les Web Content Accessibility Guidelines (WCAG) influencent les cadres juridiques dans :

- L’Union européenne
- Les États-Unis
- Le Canada

Les échecs de performance peuvent aussi constituer des barrières d’accessibilité.

L’accessibilité n’est pas une couche ajoutée après optimisation. C’est une contrainte qui façonne l’architecture dès le départ.

---

## Points clés d’ingénierie

- L’accessibilité et la performance sont des enjeux systémiques.
- Le HTML natif est généralement plus rapide et plus accessible.
- DOM stable = comportement stable des technologies d’assistance.
- Réduire JavaScript améliore l’inclusivité.
- Mesurez à la fois les Core Web Vitals et les audits d’accessibilité.

L’ingénierie de la performance sans accessibilité crée de l’exclusion.
L’ingénierie de l’accessibilité sans performance crée de la friction.

Une architecture frontend de haute qualité optimise les deux.
