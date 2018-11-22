var carouselFullfillment = {
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "Choose a item"
            }
          }
        ]
      },
      "systemIntent": {
        "intent": "actions.intent.OPTION",
        "data": {
          "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
          "carouselSelect": {
            "items": [
              {
                "optionInfo": {
                  "key": "MATH_AND_PRIME",
                  "synonyms": [
                    "math",
                    "math and prime",
                    "prime numbers",
                    "prime"
                  ]
                },
                "title": "Math & prime numbers",
                "description": "42 is an abundant number because the sum of its proper divisors 54 is greater…",
                "image": {
                  "url": "http://example.com/math_and_prime.jpg",
                  "accessibilityText": "Math & prime numbers"
                }
              },
              {
                "optionInfo": {
                  "key": "EGYPT",
                  "synonyms": [
                    "religion",
                    "egpyt",
                    "ancient egyptian"
                  ]
                },
                "title": "Ancient Egyptian religion",
                "description": "42 gods who ruled on the fate of the dead in the afterworld. Throughout the under…",
                "image": {
                  "url": "http://example.com/egypt",
                  "accessibilityText": "Egypt"
                }
              },
              {
                "optionInfo": {
                  "key": "RECIPES",
                  "synonyms": [
                    "recipes",
                    "recipe",
                    "42 recipes"
                  ]
                },
                "title": "42 recipes with 42 ingredients",
                "description": "Here's a beautifully simple recipe that's full of flavor! All you need is some ginger and…",
                "image": {
                  "url": "http://example.com/recipe",
                  "accessibilityText": "Recipe"
                }
              }
            ]
          }
        }
      }
    }
  }
}

