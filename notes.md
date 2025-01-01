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
    - and Class help us generate these objects

  Class -> Class ek template hoti hai, jisme hum objects banane ke 
           liye rules likhte hain.
    - This is design for generating Objects (Object Generator)
    - Use PascalCase "Cart()" for things that generate objects

      Benefits Of Classes -> 
          1 -> A class looks like the object that it generates
          2 -> cleaner than using a function
          3 -> Classes have extra features for Object-Oriented 
                Programming

                  1 -> Constructor 
                                - (lets us run setup code after creating a
                                 object)
                                - ye automatinc Constructor ko run kar deta 
                                  hai jab ham class ko banate hai to
                                - iska yhi name rahega 
                                - ye return nhi karega kuch bhi
                  2 -> Private Property
                                - it can only be accessed inside the class
                                - #localStoreKey -> this is call private 
                                  proeperty
                                - Class me private property ka matlab hai wo property (variable) jo sirf class ke andar hi access ki ja sakti hai. Iska istemal tab kiya jata hai jab hume data ko bahar se direct modify ya access karne se rokna ho.
                  3 ->  Private Method

          4 -> better way to generate objects in object-oriented programming