<div align="center">
  <h1>Vue Button</h1>
This repository serves as a reference for building a reusable button component in Vue and TailwindCSS.
  <br/>
  <a href="https://francisashley.github.io/vue-button">Documentation</a>
<br/>
<br/>

https://github.com/francisashley/vue-button/assets/12685308/c96d50b2-d681-42f3-af3c-a406aac52b3f
  
</div>

## Features

- Variants: Solid, Soft, Outline, Ghost
- Colors: Primary, Neutral, Danger, Success, Warning
- Sizes: 20, 24, 28, 32, 36, 40, 44
- Types: Button, Submit, Link (internal/external)
- Icons: Supports icon and icon-only buttons
- States: Loading, Disabled, Active (e.g. when a dropdown is open)

## Usage

### UIButton

```vue
<UIButton size="20" color="primary" variant="outline">
  <template #icon>
    <RiEditLine class="tw-w-full tw-h-full" />
  </template>
  Edit
</UIButton>
```

### UIIconButton

```vue
<UIIconButton size="20" color="primary" variant="outline">
  <RiEditLine class="tw-w-full tw-h-full" />
</UIButton>
```

## Props

- **size**: Specifies the height, with the width adjusting proportionally
  - Options: `20` | `24` | `28` | `32` | `36` | `40` | `44`
- **type**: Defines the button type
  - Options: `button` | `submit` | `link`
  - Note: `link` turns the button into an anchor element
- **to**: URL for the link type
- **variant**: Button style variant
  - Options: `solid` | `soft` | `outline` | `ghost`
- **color**: Button color
  - Options: `primary` | `neutral` | `danger` | `success` | `warning`
- **active**: Boolean indicating an active state, useful for dropdowns
  - Style is similar to hover state, midway between default and fully active
- **disable**: Disables the button
- **loading**: Displays a loading spinner

