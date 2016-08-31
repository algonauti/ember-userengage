# ember-userengage

Easily integrate [userengage.io](https://userengage.io) in your app as an Ember Service.


## Install

Run the following command from inside your ember-cli project:

    ember install ember-userengage


## Configure

You need to set your userengage.io Api Key in the `ENV` var on your `config/environment.js` file, like this:

```js
  var ENV = {
    // ...

    userEngage: {
      apiKey: 'your-userengage-api-key'
    }

    // ...
  }
```


## Usage

A service named `userengage` will be available in your app, providing the following methods:

* `initialize(options)`
* `refresh(options)`
* `pageHit()`
* `destroy()`

They map to methods described in [userengage.io official doc](https://userengage.io/en-us/integrations-javascript/)


### Initialize Userengage widget for non-authenticated users

In your component or controller:

```js
  userengage: Ember.inject.service(),
  actions: {
    initUserengageForGuests() {
      this.get('userengage').initialize();
    },
  }
```


### Initialize Userengage widget for authenticated users

In your component or controller:

```js
  userengage: Ember.inject.service(),
  actions: {
    initUserengageForGuests() {
      this.get('userengage').initialize({
        email: this.get('model.email'),
        name: this.get('model.fullName'),
        custom_attribute: this.get('model.customAttribute')
      });
    },
  }
```


### Notifying visited pages to Userengage

In your app's `router.js`:

```js
  didTransition() {
    this._super(...arguments);
    this.userengagePageChange();
  },

  userengage: Ember.inject.service(),
  userengagePageChange() {
    this.get('userengage').pageHit();
  }
```


### Destroying Userengage widget

In your component or controller:

```js
  userengage: Ember.inject.service(),
  actions: {
    destroy() {
      this.get('userengage').destroy();
    }
  }
```


## License

ember-userengage is released under the [MIT License](http://www.opensource.org/licenses/MIT).
