# QueueLess KLH - KLH Smart Canteen

Updated React project with KLH University KLH branding, creative home page, improved orders page, admin-only dashboard, fixed login validation, cart quantity controls, pickup slots, QR payment mockup, notifications, and admin analytics charts.

## Login

Student login:
- Email: any email ending with `@klh.edu.in`
- Password: minimum 4 characters

Admin login:
- Email: `admin@klh.edu.in`
- Password: `admin123`

## Run Project

```bash
npm install
npm run dev
```

## Build Project

```bash
npm run build
```

## Add Real KLH Campus Photo

The project currently includes branded SVG backgrounds so it works immediately.
If you have your real KLH KLH campus/canteen photo, place it in the `public` folder and rename it as:

- `klh-campus.svg` or update CSS URL in `src/index.css`
- `klh-canteen.svg` or update CSS URL in `src/index.css`

You can also use `.jpg` files, for example:

```css
background-image: linear-gradient(...), url('/klh-campus.jpg');
```
