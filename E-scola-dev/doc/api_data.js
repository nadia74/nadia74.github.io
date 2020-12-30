define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "back/public/apidoc/doc/main.js",
    "group": "/home/nemesis/Rendu/E-scola/back/public/apidoc/doc/main.js",
    "groupTitle": "/home/nemesis/Rendu/E-scola/back/public/apidoc/doc/main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "back/public/main.js",
    "group": "/home/nemesis/Rendu/E-scola/back/public/main.js",
    "groupTitle": "/home/nemesis/Rendu/E-scola/back/public/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/class/{id}/students",
    "title": "List all the students of one class",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Class unique ID.</p>"
          }
        ]
      }
    },
    "group": "Classes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "classes",
            "description": "<p>Classes' list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "classes.id",
            "description": "<p>Class id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.name",
            "description": "<p>Class name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.teacher",
            "description": "<p>Teacher of this class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.students",
            "description": "<p>Students of the class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.activities",
            "description": "<p>Activities of the class</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"CP\",\n  \"teacher\": \"Arthur Schoppenhauer\"\n  \"students\": \"Sailor Moon\",\n  \"activities\": \"History\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Students are not registered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "back/public/apidoc/apidoc.js",
    "groupTitle": "Classes",
    "name": "GetClassIdStudents",
    "sampleRequest": [
      {
        "url": "https://localhost:8000/class/{id}/students"
      }
    ]
  },
  {
    "type": "get",
    "url": "/classes/all",
    "title": "List all the classes",
    "group": "Classes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "classes",
            "description": "<p>Classes' list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "classes.id",
            "description": "<p>Class id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.name",
            "description": "<p>Class name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.teacher",
            "description": "<p>Teacher of this class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.students",
            "description": "<p>Students of the class</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "classes.activities",
            "description": "<p>Activities of the class</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"CM1\",\n  \"teacher\": \"Emmanuel Kant\"\n  \"students\": \"Britney Spears\",\n  \"activities\": \"Maths\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Class is not registered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "back/public/apidoc/apidoc.js",
    "groupTitle": "Classes",
    "name": "GetClassesAll",
    "sampleRequest": [
      {
        "url": "https://localhost:8000/classes/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/mascot",
    "title": "Makes the Mascot appear",
    "group": "Mascot",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mascot",
            "description": "<p>Mascot Life Experience.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"success\": \"Mascot is alive\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Mascot is dead\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "back/public/apidoc/apidoc.js",
    "groupTitle": "Mascot",
    "name": "GetMascot",
    "sampleRequest": [
      {
        "url": "https://localhost:8000/mascot"
      }
    ]
  },
  {
    "type": "get",
    "url": "/homeVisit",
    "title": "Type of User visiting the Homepage",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>User profile information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"success\": \"User identified\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User is not identified\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "back/public/apidoc/apidoc.js",
    "groupTitle": "User",
    "name": "GetHomevisit",
    "sampleRequest": [
      {
        "url": "https://localhost:8000/homeVisit"
      }
    ]
  }
] });
