# eleganceui-tailwind-utilities

This component is a set of utility classes to simplify and expand TailwindCSS classes.

<br />

---

# How to install and to set up

## Installation

```shell
yarn add -D eleganceui-tailwind-utilities
```

or 

```shell
npm i -D eleganceui-tailwind-utilities
```

## Configuration

It is possible to import the complete set with all utility classes at once:

```typescript
import type { Config } from 'tailwindcss'

import * as customUtilities from '@eleganceui/tailwind-utilities'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {}
  },
  plugins: [...Object.values(customUtilities)]
}

export default config
```

or if you prefer, only the desired utilities can be imported individually:

```typescript
import type { Config } from 'tailwindcss'

import { skeleton, separator } from '@eleganceui/tailwind-utilities'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {}
  },
  plugins: [skeleton, separator]
}

export default config
```

---

# How to use

```diff
- {/* before */}
- <div className="container mx-auto px-4">
-   <div className="flex w-full flex-row flex-wrap gap-4">
-     <div className="flex size-72 min-h-72 min-w-72 flex-col gap-4 overflow-hidden rounded-xl shadow">
-       <div className="flex h-32 w-full animate-pulse bg-slate-200" />
-       <div className="gap-4 rounded-lg p-4">
-         <h3 className="truncate text-lg font-bold">
-           Example long title omitted with ellipsis
-         </h3>
-         <hr className="border-0 rounded bg-slate-200 h-px w-full" />
-         <p className="text-sm">Brief description.</p>
-       </div>
-     </div>
-     {/* ... */}
-   </div>
- </div>

+ {/* after */}
+ <div className="px-4 container-row g-4">
+   <div className="ov-hidden br-xl shadow col g-4 square-72">
+     <div className="h-32 col-full animate-skeleton" />
+     <div className="br-lg p-4 g-4">
+       <h3 className="ellipsis fs-lg fw-bold">
+         Example long title omitted with ellipsis
+       </h3>
+       <hr className="separator-x" />
+       <p className="fs-sm">Brief description.</p>
+     </div>
+   </div>
+   {/* ... */}
+ </div>
```

There are two types of utility classes, those that simplify the syntax of classes that already exist in TailwindCSS and those that add new functionality:

Simplified classes:

- content-{suffix} => ac-{suffix}.
  - Before: `<div class="content-center" />`
  - After: `<div class="ac-center" />`

- items-{suffix} => ai-{suffix}.
  - Before: `<div class="items-start" />`
  - After: `<div class="ai-start" />`

- self-{suffix} => as-{suffix}.
  - Before: `<div class="self-end" />`
  - After: `<div class="as-end" />`

- justify-{suffix} => jc-{suffix}.
  - Before: `<div class="justify-center" />`
  - After: `<div class="jc-center" />`

- justify-items-{suffix} => ji-{suffix}.
  - Before: `<div class="justify-items-start" />`
  - After: `<div class="ji-start" />`

- justify-self-{suffix} => js-{suffix}.
  - Before: `<div class="justify-self-end" />`
  - After: `<div class="js-end" />`

- place-content-{suffix} => pc-{suffix}.
  - Before: `<div class="place-content-center" />`
  - After: `<div class="pc-center" />`

- place-items-{suffix} => pi-{suffix}.
  - Before: `<div class="place-items-start" />`
  - After: `<div class="pi-start" />`

- place-self-{suffix} => ps-{suffix}.
  - Before: `<div class="place-self-end" />`
  - After: `<div class="ps-end" />`

- text-{suffix-font-size} => fs-{suffix-font-size}.
  - Before: `<div class="text-lg" />`
  - After: `<div class="fs-lg" />`

- font-{suffix-font-weight} => fw-{suffix-font-weight}.
  - Before: `<div class="font-bold" />`
  - After: `<div class="fw-bold" />`

- gap-{suffix} => g-{suffix}.
  - Before: `<div class="gap-0" />`
  - After: `<div class="g-0" />`

- gap-y-{suffix} => gy-{suffix}.
  - Before: `<div class="gap-y-0" />`
  - After: `<div class="gy-0" />`

- gap-x-{suffix} => gx-{suffix}.
  - Before: `<div class="gap-x-0" />`
  - After: `<div class="gx-0" />`

- overflow-{suffix} => ov-{suffix}.
  - Before: `<div class="overflow-hidden" />`
  - After: `<div class="ov-hidden" />`

- overflow-x-{suffix} => ovx-{suffix}.
  - Before: `<div class="overflow-x-clip" />`
  - After: `<div class="ovx-clip" />`

- overflow-y-{suffix} => ovy-{suffix}.
  - Before: `<div class="overflow-y-scroll" />`
  - After: `<div class="ovy-scroll" />`

- rounded-{suffix} => br-{suffix}.
  - Before: `<div class="rounded-bl-xl" />`
  - After: `<div class="br-bl-xl" />`
  - Valid for all values and variants of `rounded`.

- leading-{suffix} => lh-{suffix}.
  - Before: `<div class="leading-3" />`
  - After: `<div class="lh-3" />`

<br>

Classes with new features:

- {r, l, t, b, x, y}-{suffix}:
  - `<div class="r-1" />`
  - `.r-1 { right: 0.25rem; /* 4px */ }`
  
  - `<div class="l-1.5" />`
  - `.l-1.5 { left: 0.375rem; /* 6px */ }`
  
  - `<div class="t-1" />`
  - `.t-1 { top: 0.25rem; /* 4px */ }`
  
  - `<div class="b-2" />`
  - `.b-2 { bottom: 0.5rem; /* 8px */ }`
  
  - `<div class="x-1" />`
  - `.x-1 { left: 0.25rem; right: 0.25rem; }`
  
  - `<div class="y-1" />`
  - `.y-1 { bottom: 0.25rem; top: 0.25rem; }`

- center:
  - `<div class="center" />`
  - `.center { justify-content: center; align-items: center; }`

- col:
  - `<div class="col" />`
  - `.col { display: flex; flex-direction: column; }`

- col-full:
  - `<div class="col-full" />`
  - `.col { display: flex; flex-direction: column; width: 100%; }`

- row:
  - `<div class="row" />`
  - `.row { display: flex; flex-direction: row; }`

- row-full:
  - `<div class="row-full" />`
  - `.row { display: flex; flex-direction: row; width: 100%; }`

- container-col:
  - `<div class="container-col" />`
  - ```
    .container-col {
      display: flex;
      flex-direction: column;
      width: min(100% - 32px, 1500px - 32px);
    }
  
    @media (min-width: 640px) {
      .container-col {
        width: min(100% - 48px, 1500px - 48px);
      }
    }
  
    @media (min-width: 768px) {
      .container-col {
        width: min(100% - 96px, 1500px - 96px);
      }
    }
  
    @media (min-width: 1024px) {
      .container-col {
        width: min(100% - 128px, 1500px - 128px);
      }
    }
    ```

- container-row:
  - `<div class="container-row" />`
  - ```
    .container-row {
      display: flex;
      flex-flow: row wrap;
      width: min(100% - 32px, 1500px - 32px);
    }
  
    @media (min-width: 640px) {
      .container-row {
        width: min(100% - 48px, 1500px - 48px);
      }
    }
  
    @media (min-width: 768px) {
      .container-row {
        width: min(100% - 96px, 1500px - 96px);
      }
    }
  
    @media (min-width: 1024px) {
      .container-row {
        width: min(100% - 128px, 1500px - 128px);
      }
    }
    ```

- after-base:
  - `<div class="after-base" />`
  - `.after-base::after { content: ""; display: block; }`
  
- before-base:
  - `<div class="before-base" />`
  - `.before-base::before { content: ""; display: block; }`
  
- max-size-{suffix}:
  - `<div class="max-size-6" />`
  - `.max-size-6 { max-width: 1.5rem; max-height: 1.5rem; }`
  
- min-size-{suffix}:
  - `<div class="min-size-6" />`
  - `.min-size-6 { min-width: 1.5rem; min-height: 1.5rem; }`
  
- square-{suffix}:
  - `<div class="square-6" />`
  - `.square-6 { width: 1.5rem; height: 1.5rem; min-width: 1.5rem; min-height: 1.5rem; }`

- ellipsis:
  - `<div class="ellipsis" />`
  - Adds ellipsis to text that exceeds the container, taking up all available space, in addition to working in cases where `truncate` does not work.

- scrollbar-hide:
  - `<div class="scrollbar-hide" />`
  - Hides scroll bar.

- scrollbar-default:
  - `<div class="scrollbar-default" />`
  - Show scroll bar.

- separator-x:
  - `<hr class="separator-x" />`
  - Creates a 1px tall horizontal separator with a width of 100%.

- separator-y:
  - `<hr class="separator-y" />`
  - Creates a 1px wide vertical separator with a height of 100%.

- animate-skeleton:
  - `<div class="animate-skeleton" />`
  - Create skeleton animation with `animate-pulse bg-slate-200`.

<br />

---

# Contributors
<a href="https://github.com/EleganceUI/eleganceui-tailwindcss-utilities/graphs/contributors"><img src="https://contrib.rocks/image?repo=EleganceUI/eleganceui-tailwindcss-utilities" /></a>

# Author

By Éverton Toffanetto.

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://www.youtube.com/@toffanettodev
