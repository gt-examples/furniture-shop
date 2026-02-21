# Furniture Shop

A modern furniture e-commerce demo showcasing internationalization with General Translation.

**[Live Demo](https://furniture-shop.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Atelier Home is a furniture store demo that showcases how to internationalize a full e-commerce experience — from product catalogs and room browsing to cart management and shipping calculators. All user-facing text is translated using `gt-next`, with locale-aware currency and number formatting throughout.

## GT Features Used

- `<T>` — JSX translation
- `<Tx>` — Dynamic content translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by locale
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/furniture-shop.git
cd furniture-shop
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
