# Savore Showcase

Build a **fully functional, premium restaurant website demo** called **“SAVORÉ”**. This is a portfolio/demo website that I will show to potential restaurant clients, so it should look like a real, high-end restaurant website rather than an AI-generated template.



## 1. Overall Design



Create a modern luxury restaurant aesthetic with:



* Elegant typography

* Premium food photography

* Sophisticated dark + warm neutral color palette

* Smooth animations

* Lots of whitespace

* Glassmorphism where appropriate

* Subtle hover effects

* Smooth scrolling

* Fully responsive design for mobile, tablet, and desktop

* Professional navigation and footer



The website should feel similar to a high-end international restaurant.



Use high-quality royalty-free food images/placeholders.



## 2. Homepage



Create an impressive animated hero section containing:



* Restaurant name: SAVORÉ

* Tagline: “An unforgettable taste, crafted with passion.”

* Short description

* “Reserve a Table” primary CTA

* “Explore Menu” secondary CTA

* Large premium restaurant/food background

* Subtle parallax/entrance animation



Add animated sections for:



* About the restaurant

* Signature dishes

* Popular menu items

* Chef's special

* Customer reviews

* Restaurant gallery

* Opening hours

* Location

* Final reservation CTA



Elements should animate smoothly when scrolling into view.



## 3. Navigation



Create a sticky navigation bar with:



* SAVORÉ logo

* Home

* Menu

* About

* Gallery

* Reservations

* Contact

* Login/Profile button

* Mobile hamburger menu



Navbar should change appearance slightly when scrolling.



## 4. Menu System



Create a complete interactive menu page.



Categories:



* Starters

* Main Course

* Pasta

* Pizza

* Desserts

* Drinks



Each item should contain:



* Image

* Name

* Description

* Price

* Category

* Vegetarian indicator where applicable

* “Add to Cart” button



Add:



* Category filtering

* Search menu functionality

* Smooth animations when filtering

* Item detail modal when clicking a dish



## 5. Shopping Cart



Create a functional cart system.



Users should be able to:



* Add food items

* Increase/decrease quantity

* Remove items

* See subtotal

* See taxes

* See total

* Clear cart



Show cart in a beautiful side drawer/modal.



Persist cart data during the session.



Add a “Proceed to Checkout” button.



For this demo, checkout can be simulated rather than connected to a real payment gateway.



## 6. Login & Signup



Create fully functional-looking authentication UI.



Login modal/page:



* Email

* Password

* Remember me

* Login button

* Forgot password

* Link to Sign Up



Signup:



* Full name

* Email

* Password

* Confirm password

* Create Account button



After login:



* Show the user's name/profile icon in the navbar.

* Provide a profile dropdown.

* Include Logout.



Use proper form validation and error/success messages.



If backend authentication is available, use it. Otherwise create a realistic demo authentication flow using local/session storage.



Do NOT make the buttons fake/non-functional.



## 7. Table Reservation System



Create a fully interactive **“Reserve a Table”** system.



Reservation form:



* Name

* Email

* Phone

* Date

* Time

* Number of guests

* Seating preference



  * Indoor

  * Outdoor

  * Window

* Special requests



After submission:



* Validate all fields

* Show a beautiful confirmation screen

* Generate a reservation confirmation number

* Display reservation details

* Allow the user to cancel the reservation from their profile



Create a “My Reservations” section in the user profile.



For the demo, reservation data can be stored locally or through the backend if available.



## 8. Table Selection



Make the reservation experience more impressive by adding an optional visual table-selection screen.



Display a restaurant floor plan with tables.



Tables should have states:



* Available

* Selected

* Reserved



Allow users to select an available table.



When a table is selected, visually highlight it.



Prevent users from selecting already reserved tables.



## 9. User Dashboard



After login, create a user dashboard containing:



* Welcome message

* Profile information

* Upcoming reservations

* Previous reservations

* Favorite dishes

* Order history

* Logout button



Use cards and smooth animations.



## 10. Gallery



Create an elegant animated gallery containing:



* Food

* Restaurant interior

* Chef

* Dining area

* Signature dishes



Add image hover animations.



Clicking an image should open a lightbox/modal.



## 11. Reviews



Create a customer review section with:



* Star ratings

* Customer names

* Review text

* Avatar images



Add an animated carousel/slider.



Include 6–8 realistic demo reviews.



## 12. Contact Section



Include:



* Restaurant address

* Phone

* Email

* Opening hours

* Embedded map placeholder

* Contact form



Contact form:



* Name

* Email

* Message

* Send button



Show a success notification after submission.



## 13. Admin Demo Panel



Create an **Admin Dashboard** for demonstration purposes.



Admin dashboard should contain:



* Total reservations

* Today's reservations

* Orders

* Revenue demo statistic

* Customer count



Reservation management:



* View reservations

* Confirm reservation

* Cancel reservation

* Mark reservation as completed



Menu management:



* Add item

* Edit item

* Delete item

* Change price

* Change availability



Use demo data.



Create a simple demo admin login rather than exposing real credentials.



## 14. Animations



Use professional animations throughout the site, but don't overdo them.



Include:



* Fade-in animations

* Slide-up animations

* Smooth page transitions

* Button hover effects

* Card hover effects

* Image zoom effects

* Modal animations

* Navbar transition

* Loading animations

* Scroll reveal animations

* Cart drawer animation

* Reservation confirmation animation



Animations should be smooth and fast enough that the website still feels professional.



## 15. Notifications



Create toast notifications for actions such as:



* Added to cart

* Removed from cart

* Login successful

* Account created

* Reservation confirmed

* Reservation cancelled

* Contact form submitted

* Menu item added/removed



## 16. Mobile Experience



The mobile version must be excellent.



Include:



* Responsive navigation

* Hamburger menu

* Touch-friendly buttons

* Responsive menu cards

* Responsive reservation system

* Responsive cart

* Responsive dashboard

* Responsive gallery



Do not simply shrink the desktop design.



## 17. Pages



Create these routes:



/

/menu

/about

/gallery

/reservations

/contact

/login

/signup

/profile

/checkout

/admin



Navigation between pages must work correctly.



## 18. Technical Requirements



Use a modern production-quality frontend architecture.



Prefer:



* React

* TypeScript

* Tailwind CSS

* Component-based architecture

* Proper routing

* Reusable components

* Form validation

* State management where appropriate



Use Supabase if available for:



* Authentication

* Users

* Reservations

* Orders

* Menu items



If Supabase is not configured, create a clean demo fallback using local/session storage.



Keep the code organized and maintainable.



## 19. Important Functional Requirement



Every major button must actually do something.



Do NOT create:



* Dead buttons

* Fake navigation

* Empty login buttons

* Non-working reservation buttons

* Decorative forms that don't submit

* Broken mobile menus



The website should be usable as a real interactive demo.



## 20. Demo Data



Populate the website with realistic restaurant data so it looks complete immediately after launching.



Restaurant:

SAVORÉ



Cuisine:

Contemporary European / International



Opening Hours:

Monday–Thursday: 12:00 PM – 10:30 PM

Friday–Saturday: 12:00 PM – 11:30 PM

Sunday: 12:00 PM – 9:30 PM



Use realistic food names, descriptions, prices, reviews, reservations, and customer data.



## 21. Final Polish



Before finishing:



* Check every route

* Check every button

* Check forms

* Check login/signup flow

* Check reservation flow

* Check cart

* Check mobile responsiveness



* Fix console errors

* Fix broken links

* Add loading states

* Add empty states

* Add error states

* Make sure no placeholder text such as “Lorem ipsum” remains

* Make the UI look premium and client-ready



The final result should look like a **real restaurant's website that I could show to a paying client**, not a simple student project.



Prioritize **visual quality + functionality + smooth animations + responsive design**.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dbdcc2c8-763e-4541-b8cd-3ec5cc877457).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
