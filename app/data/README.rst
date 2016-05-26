== Data

This directory stores all the data being used by the angular app.

==== Works

The file ``works.json`` contains a list of all the works done. This can be
paintings, sculptures, etc.

::

    {
      "title": "",  // String: Title of the work/page
      "description": "",  // String: The html content to describe the work
                         // in detail.
      "type": "",  // String: "painting", "sculpture", "installation",
                   // "graphic", ""
      "groups": [],  // List of strings: The name to group multiple
                     // works together with. Like, a show or a series.
      "creationDate": "",  // Number: Date when work was created in the
                           // format yyyymmdd
      "length": "",  // Number: Length of a 3D work (Not meant for paintings)
      "width": "",  // Number: Width of the work
      "height": "",  // Number: Height of the work
      "materials": [],  // List of string: The materials used
      "price": "",  // String: The price or price range of the painting
      "sold": false,  // Boolean: true if sold, else false
      "thumbnail": "",  // String: URL to a small picture of the work. A
                        // typical thumbnail should be ~ 150x150px and square.
      "urls": []  // List of strings: URLs that show the work
    }
