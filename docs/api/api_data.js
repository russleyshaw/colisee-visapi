define({ "api": [
  {
    "type": "get",
    "url": "/api/gamelog",
    "title": "",
    "name": "GetGamelog",
    "group": "Visapi",
    "description": "<p>Retrieve gamelog of most recent unvisualized finished game from the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time",
            "description": "<p>Optional Time to get gamelog before</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "gamelog",
            "description": "<p>Gamelog file.</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>No gamelog was available.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main.js",
    "groupTitle": "Visapi"
  },
  {
    "type": "get",
    "url": "/api/gamelog",
    "title": "",
    "name": "GetGamelog",
    "group": "Visapi",
    "description": "<p>Retrieve gamelog of most recent unvisualized finished game from the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time",
            "description": "<p>Optional Time to get gamelog before</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "gamelog",
            "description": "<p>Gamelog file.</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": "<p>No gamelog was available.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Something went wrong.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main.ts",
    "groupTitle": "Visapi"
  }
] });
