# Project for the Web Developer course, by Software Academy from Sibiu.

## Live version deployed here: https://angular-add-products-to-cart-observab.netlify.app/

## Benefit:
  - In order to have dynamic data in our future Angular application, we have to create in advance a service that shares data between components

## Acceptance criteria:
  - Using a single page (no routing), develop two components:
    - The first component has 3 products in any form (card, table, etc.)
    - Under the first component, we add another component to represent a shopping cart
    - For the first component:
      - The products must have the following properties:
        - name
        - description
        - price
        - the products must have an add to cart button
    - For the second component:
      - must display the products in the basket
      - a list of the products in the basket in any form
      - a subtotal (accumulated price).
      - the list of products and the subtotal must be updated if a product is added to the basket from the list above
  - What should we use?
    - At least two components;
    - A service that allows communication between components using an Observable/Subject type and in which to keep the list of products.
    - We can use bootstrap or whatever makes our design easy, the focus being on functionality.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
