For example:

```javascript
// An array of signature page objects.
[ { // The defined term for the party signing
    "term": "Contractor",
    // The header paragraph of the signature page.
    "header": "The parties enter this agreement on the first date written above.",
    // Additional information to be filled in beneath signature.
    "information": [ "date" ],
    // Signing individual's name.
    // Here, signing in individual capacity.
    "name": "Jane Doe" },
  { "term": "Company",
    "header": "The parties enter this agreement on the first date written above.",
    "information": [ "address", "email" ],
    // Intermediary entities.
    "entities": [
      // The entity actually signing.
      { "name": "B, LLC",
        "form": "corporation",
        "jurisdiction": "Delaware",
        // The agent of the entity signing for it.
        // In this case, A, LP, next in the Array.
        "by": "Manager" },
      { "name": "A, LP",
        "form": "limited partnership",
        "jurisdiction": "Delaware",
        "by": "Limited Partner" },
      { "name": "NewCo, Inc",
        "form": "corporation",
        "jurisdiction": "Delaware",
        // Jane Doe is director of NewCo.
        "by": "Director" } ],
    "name": "Jane Doe" } ]
```
