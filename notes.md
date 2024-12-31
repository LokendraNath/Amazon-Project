MVC->  Makes Sure the page always matches the data

  Main Idea Of Javascript
    1. Save the Data  (Model)
    2. Generate the HTML (View)
    3. Make it interactive (Controller)


  1. Update The data
  2. Regenerate All the HTML 

  = MVC ( Model - View - Controller )

  Model --> save and manages the Data (Data Folder)
  View --> takes the data and display in to the page ( Generate )
  Controller --> runs some code when we interact with the page (Event Listener)

  = Interact With Each Other With Loop
    Loop - 
          1. Use the Model to Generate the View (cart --> html generate)
          2. intaract with the view it will run the controller ('eg. query selector')
          3. controller update the Model (update the data eg. updateDeliveryOptions(productId, deliveryOptionId) 192)
          4 .update the Model for regenerate the view (.renderOrderSummary(); 193)

OOP -> Object-Oriented Programming (OOP)
    - Function inside of object Called Method
    - Organize our code into objects
    - ties to represent the real world
    - Use PascalCase "Cart()" for things that generate objects