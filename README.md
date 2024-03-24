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
-     <div className="flex size-72 min-h-72 min-w-72 flex-col gap-4 overflow-hidden rounded-xl shadow border-2 border-blue-500">
-       <div className="flex h-32 w-full animate-pulse bg-slate-200" />
-       <div className="gap-4 rounded-lg p-4">
-         <h3 className="truncate text-lg font-bold text-blue-500">
-           Example long title omitted with ellipsis
-         </h3>
-         <hr className="border-0 rounded bg-slate-200 h-px w-full" />
-         <p className="text-sm font-normal text-gray-800">Brief description.</p>
-       </div>
-     </div>
-     {/* ... */}
-   </div>
- </div>
+ {/* after */}
+ <div className="px-4 container-row g-4">
+   <div className="ov-hidden br-xl shadow col g-4 square-72 bw-2-blue-500">
+     <div className="h-32 col-full animate-skeleton" />
+     <div className="br-lg p-4 g-4">
+       <h3 className="ellipsis fs-lg-bold-blue-500">
+         Example long title omitted with ellipsis
+       </h3>
+       <hr className="hr-x" />
+       <p className="fs-sm-normal-gray-800">Brief description.</p>
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
  - Valid for all values and variants of `rounded`.
  - Before: `<div class="rounded-bl-xl" />`
  - After: `<div class="br-bl-xl" />`

- columns-{suffix} => cols-{suffix}.
  - Valid for all values and variants of `columns`.
  - Before: `<div class="columns-xl" />`
  - After: `<div class="cols-xl" />`

- border-{suffix} => bw-{suffix}.
  - Valid for all values and variants of `border-width`.
  - Before: `<div class="border-y-0" />`
  - After: `<div class="bw-y-0" />`

- border-{suffix} => bc-{suffix}.
  - Valid for all values and variants of `border-color`.
  - Before: `<div class="border-white" />`
  - After: `<div class="bc-white" />`

- outline-{suffix} => otl-{suffix}.
  - Valid for all values and variants of `outline-width`.
  - Before: `<div class="outline-1" />`
  - After: `<div class="otl-1" />`

- outline-{suffix} => otl-{suffix}.
  - Valid for all values and variants of `outline-color`.
  - Before: `<div class="outline-white" />`
  - After: `<div class="otl-white" />`

- outline-offset-{suffix} => otl-o-{suffix}.
  - Valid for all values and variants of `outline-offset`.
  - Before: `<div class="outline-offset-1" />`
  - After: `<div class="otl-o-1" />`

- leading-{suffix} => lh-{suffix}.
  - Before: `<div class="leading-3" />`
  - After: `<div class="lh-3" />`

- object-{suffix} => obj-{suffix}.
  - Valid for all values and variants of `object`.
  - Before: `<div class="object-fit" />`
  - After: `<div class="obj-fit" />`

  - Before: `<div class="object-left-bottom" />`
  - After: `<div class="obj-lb" />`

- bg-{position} => bg-{abbreviation}.
  - Before: `<div class="bg-right-top" />`
  - After: `<div class="bg-rt" />`

- flex-{wrap-reverse, wrap, nowrap} => f-{wrap-reverse, wrap, nowrap}.
  - Before: `<div class="flex-wrap" />`
  - After: `<div class="f-wrap" />`

- flex-{1, auto, initial, none} => f-{1, auto, initial, none}.
  - Before: `<div class="flex-1" />`
  - After: `<div class="f-1" />`

<br>

---

Classes with new features:

- fs-{fontSize}-{fontWeight}:
  - Before: `<div class="text-lg font-bold" />`
  - After: `<div class="fs-lg-bold" />`

- fs-{fontSize}-{color}:
  - Before: `<div class="text-lg text-blue-500" />`
  - After: `<div class="fs-lg-blue-500" />`


- fs-{fontSize}-{fontWeight}-{color}:
  - Before: `<div class="text-lg font-bold text-blue-500" />`
  - After: `<div class="fs-lg-bold-blue-500" />`

- bw-{borderWidth}-{borderColor}:
  - Before: `<div class="border-4 border-blue-500" />`
  - After: `<div class="bw-4-blue-500" />`

- bw-{borderWidth}-{borderStyle}-{borderColor}:
  - Before: `<div class="border-4 border-dashed border-blue-500" />`
  - After: `<div class="bw-4-dashed-blue-500" />`

- otl-{outlineWidth}-{outlineColor}.
  - Before: `<div class="outline-2 outline outline-amber-600" />`
  - After: `<div class="otl-2-amber-600" />`

- otl-{outlineWidth}-{outlineStyle}-{outlineColor}.
  - Before: `<div class="outline-2 outline-dashed outline-amber-600" />`
  - After: `<div class="otl-2-dashed-amber-600" />`

- {r, l, t, b, x, y}-{suffix}:
  - Before: `<div class="right-1" />`
  - After: `<div class="r-1" />`

  - Before: `<div class="left-1.5" />`
  - After: `<div class="l-1.5" />`

  - Before: `<div class="top-1" />`
  - After: `<div class="t-1" />`

  - Before: `<div class="bottom-2" />`
  - After: `<div class="b-2" />`

  - Before: `<div class="inset-x-1" />`
  - After: `<div class="x-1" />`

  - Before: `<div class="inset-y-1" />`
  - After: `<div class="y-1" />`

- center:
  - Before: `<div class="items-center justify-center" />`
  - After: `<div class="center" />`

- col:
  - Before: `<div class="flex flex-col" />`
  - After: `<div class="col" />`

- col-reverse:
  - Before: `<div class="flex flex-col-reverse" />`
  - After: `<div class="col-reverse" />`

- col-full:
  - Before: `<div class="flex flex-col w-full" />`
  - After: `<div class="col-full" />`

- row:
  - Before: `<div class="flex flex-row" />`
  - After: `<div class="row" />`

- row-reverse:
  - Before: `<div class="flex flex-row-reverse" />`
  - After: `<div class="row-reverse" />`

- row-full:
  - Before: `<div class="flex flex-row w-full" />`
  - After: `<div class="row-full" />`

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
  - Before: `<div class="after:block after:content-['']" />`
  - After: `<div class="after-base" />`
  
- before-base:
  - Before: `<div class="before:block before:content-['']" />`
  - After: `<div class="before-base" />`
  
- max-size-{suffix}:
  - Before: `<div class="max-w-6 max-h-6" />`
  - After: `<div class="max-size-6" />`
  
- min-size-{suffix}:
  - Before: `<div class="min-w-6 min-h-6" />`
  - After: `<div class="min-size-6" />`
  
- square-{suffix}:
  - Before: `<div class="min-w-6 min-h-6 w-6 h-6" />`
  - After: `<div class="square-6" />`

- ellipsis:
  - Adds ellipsis to text that exceeds the container, taking up all available space, in addition to working in cases where `truncate` does not work.
  - `<div class="ellipsis" />`

- scrollbar-hide:
  - `<div class="scrollbar-hide" />`
  - Hides scroll bar.

- scrollbar-default:
  - `<div class="scrollbar-default" />`
  - Show scroll bar.

- hr-x:
  - Before: `<hr class="border-0 rounded-[100px] bg-gray-200 h-px w-full" />`
  - After: `<hr class="hr-x" />`
  - Before: `<hr class="border-0 rounded-[100px] bg-blue-500 h-px w-full" />`
  - After: `<hr class="hr-x-blue-500" />`

- hr-y:
  - Before: `<hr class="border-0 rounded-[100px] bg-gray-200 w-px h-full" />`
  - After: `<hr class="hr-y" />`
  - Before: `<hr class="border-0 rounded-[100px] bg-blue-500 w-px h-full" />`
  - After: `<hr class="hr-y-blue-500" />`

- animate-skeleton:
  - Before: `<div class="animate-pulse bg-slate-200" />`
  - After: `<div class="animate-skeleton" />`.

<br />

---

# Contributors
<a href="https://github.com/EleganceUI/eleganceui-tailwindcss-utilities/graphs/contributors"><img src="https://contrib.rocks/image?repo=EleganceUI/eleganceui-tailwindcss-utilities" /></a>

# Author

By Éverton Toffanetto.

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://www.youtube.com/@toffanettodev
