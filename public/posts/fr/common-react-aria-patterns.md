Lors de la création d’interfaces complexes en React, le HTML natif ne suffit pas toujours. Les modales, combobox, onglets et composants dynamiques nécessitent souvent **ARIA (Accessible Rich Internet Applications)** pour exposer une sémantique correcte aux technologies d’assistance.

Ce guide couvre des **patterns ARIA pratiques en React**, basés sur la spécification WAI-ARIA du World Wide Web Consortium (W3C) et alignés avec WCAG 2.x.

> Règle n°1 : si le HTML natif peut le faire, utilisez le HTML natif. ARIA est un complément, pas un remplacement.

---

## 1. `aria-expanded` — Déploiement & boutons de bascule

Utilisé lorsqu’un bouton contrôle la visibilité d’un contenu (menus déroulants, accordéons).

### Pattern

```jsx
function AccordionItem({ id, title, children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      <div id={`${id}-panel`} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
```

### Points clés

- `aria-expanded` reflète l’état.
- `aria-controls` référence la zone contrôlée.
- Préférez `<button>` à un `<div>` cliquable.

## 2. `aria-hidden` — Contrôler la visibilité pour les lecteurs d’écran

Utilisé pour masquer du contenu décoratif ou redondant aux technologies d’assistance.

### Exemple d’icône décorative

```html
<span aria-hidden="true">🔍</span>
```

### Avertissement important

N’utilisez jamais `aria-hidden="true"` sur :

- Des éléments focusables
- Des contrôles interactifs
- Du contenu porteur de sens

Cela retire complètement l’élément de l’arbre d’accessibilité.

## 3. `aria-describedby` — Descriptions complémentaires

Utilisé pour associer les champs de formulaire à du texte d’aide ou des messages d’erreur.

```jsx
function TextField({ id, label, error, hint }) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-describedby={describedBy || undefined}
        aria-invalid={!!error}
      />

      {hint && <p id={`${id}-hint`}>{hint}</p>}
      {error && <p id={`${id}-error`}>{error}</p>}
    </div>
  );
}
```

Cela permet aux lecteurs d’écran de lire :

- Le label
- L’aide
- L’erreur

Dans un ordre structuré.

## 4. `role="dialog"` — Modales accessibles

Les modales doivent :

- Piéger le focus
- Avoir un libellé
- Empêcher l’interaction avec l’arrière-plan

### Pattern minimal

```jsx
function Modal({ open, onClose, title, children }) {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      dialogRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div role="presentation" className="backdrop">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <h2 id="dialog-title">{title}</h2>
        {children}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}
```

### Exigences critiques

- Déplacer le focus dans la boîte de dialogue à l’ouverture.
- Restaurer le focus à la fermeture.
- Piéger le focus dans la modale.

Si cela vous semble complexe, c’est normal. Utilisez des bibliothèques éprouvées quand c’est possible.

## 5. `role="tablist"` — Pattern d’onglets

Les onglets exigent une coordination des rôles ARIA et du comportement clavier.

### Structure

```jsx
function Tabs({ tabs }) {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === index}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

### Doit aussi prendre en charge

- La navigation aux flèches
- Un déplacement du focus correct
- Le `tabIndex` roving

Les onglets ne sont pas seulement des composants visuels — ce sont des systèmes d’interaction.

## 6. `aria-live` — Annoncer les changements dynamiques

Utilisé quand du contenu se met à jour sans rechargement de page (ex. validation de formulaire asynchrone).

```jsx
function LiveMessage({ message }) {
  return <div aria-live="polite">{message}</div>;
}
```

Options :

- `polite` → attend que l’utilisateur soit inactif
- `assertive` → interrompt immédiatement (à utiliser avec parcimonie)

N’abusez pas des zones live — des annonces excessives dégradent l’utilisabilité.

## 7. `role="combobox"` — Composants de sélection personnalisés

Les sélecteurs personnalisés sont parmi les composants les plus mal implémentés.

Le pattern minimal nécessite :

- `role="combobox"`
- `aria-expanded`
- `aria-controls`
- `aria-activedescendant`

Exemple (simplifié) :

```jsx
<input
  role="combobox"
  aria-expanded={open}
  aria-controls="listbox"
  aria-activedescendant={activeId}
/>
<ul role="listbox" id="listbox">
  {options.map((option) => (
    <li
      key={option.id}
      role="option"
      id={option.id}
      aria-selected={option.id === activeId}
    >
      {option.label}
    </li>
  ))}
</ul>
```

À moins d’implémenter complètement l’interaction clavier selon les WAI-ARIA Authoring Practices, préférez `<select>` natif.

## 8. Éviter ces anti-patterns ARIA

### ❌ Ajouter ARIA incorrectement sur des éléments natifs

```html
<button role="button">
```

Redondant et inutile.

### ❌ Utiliser `role="presentation"` incorrectement

Supprime la sémantique — casse souvent les tableaux et les listes.

### ❌ Remplacer les boutons par des divs

```jsx
<div onClick={handleClick}>
```

Casse :

- L’interaction clavier
- Le comportement de focus
- La sémantique de l’arbre d’accessibilité

Utilisez `<button>`.

## 9. Synchronisation d’état : ARIA doit refléter la réalité

Les attributs ARIA doivent toujours refléter l’état réel du composant.

Mauvais :

```jsx
aria-expanded="true"
```

Quand le menu déroulant est visuellement fermé.

En React, liez toujours ARIA à l’état :

```jsx
aria-expanded={isOpen}
```

ARIA n’est pas une métadonnée décorative — cela définit la sémantique d’accessibilité.

## Principes finaux

- HTML natif d’abord.
- ARIA reflète l’état — ne le codez jamais en dur.
- Chaque pattern interactif exige un support clavier.
- Testez avec un lecteur d’écran.
- En cas de doute, consultez les [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).

Les composants React accessibles ne consistent pas à ajouter des attributs — ils consistent à implémenter des modèles d’interaction complets.
