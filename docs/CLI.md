# CLI journal

## 0. Application, module, and root component.

```bash
# Generate a new application choosing the Angular version
npx @angular/cli@13.3.8 new altia-angular-intro-julio --routing=true --style=css

npm i @angular/cli@13.3.8 -g
ng new altia-angular-intro-julio --routing=true --style=css

# Add a bit of style
npm install @picocss/pico

```

## 1. Templates

## 2. Modules

```bash
# Generate new component Header
ng g c header

# Generate new component Footer
ng g c footer

# Generate new module Home
ng g m home

# Generate new component home
# (needs to be exported in the module Home)
ng g c home
ng g c agencies
ng g c trips


# Generate a Shared module
ng g m shared
# Generate an exported component
ng g c shared/reloading --export

# Generate a Shared module
ng g m core
## Move header and footer to core module
```

# 3. Router

```bash
# Generate a new module
ng g m about
# Generate a new component
ng g c about

# Generate a new route
ng g m auth/register --route=auth/register --module=app
ng g m auth/login --route=auth/login --module=app
ng g m contact --route=contact --module=app

ng g m agencies --route=agencies --module=app
ng g m agencies/agenciesNew --route=new --module=agencies
```
