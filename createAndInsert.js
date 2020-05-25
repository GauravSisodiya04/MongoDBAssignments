/*The Theory of Everything - Stephen Hawking.
        This book has 2 binding options: Hardback and paperback.
        The publisher is Jaico and it was published in 2006. 
        There are 5 copies of paperback and 19 copies of hardback are available in stock. 
        It costs 300 for the paperback and 1200 for the hardback variants, respectively.
        It is classified under physics, science, astrophysics, universe. */

        db.createCollection("bookstore_inventory");

        db.bookstore_inventory.insertOne({
            name:"Theory of Everything",
            author:"Stephen Hawking",
            publisher:"Jaico",
            year_of_publishing:2006,
            categories:["physics","science","astrophysics","universe"],
            binding:[{
                hardback:{
                    cost:1200,
                    stock:19
                },
                paperback:{
                    cost:300,
                    stock:5
        
                }
            }]
        })
        
        /*OUTPUT
        {
                "acknowledged" : true,
                "insertedId" : ObjectId("5eca0ab2e62c414aaba11db9")
        }
        
        */

/*
2.
The Origin of Species - Charles Darwin.
This book has only hardback binding and it retails for 800.
There are 10 copies in stock and it has ISBN 0451529065.
The book is classified under biology, life sciences, evolution, science. */

        db.bookstore_inventory.insertOne({
            name:"The Origin of Species",
            author:"Charles Darwin",
            binding:{
                hardback:{
                    cost:800,
                    stock:10,
                }
            },
            ISBN:0451529065,
            categories:["biology","science","life sciences","evolution"]
        })       

/*OUTPUT
{
       "acknowledged" : true,
       "insertedId" : ObjectId("5eca0c01e62c414aaba11dba")
}

*/

/*The Magic of Reality - Richard Dawkins.
        This book has both hardback and paperback binding options and there are 12 copies of each in stock. 
        The retail price of paperback is 300, and the hardback costs 1350.
        The publisher is RHUK. 
        The book is classified under society, social sciences, science, culture. */

        db.bookstore_inventory.insertOne({
            name:"The Magic of Reality",
            author:"Richard Dawkins",
            publisher:"RHUK",
            categories:["society","social sciences","science","culture"],
            binding:{
                paperback:{
                    stock:12,
                    cost:300
                },
                hardback:{
                    stock:12,
                    cost:1350
                }
            }
        })
        
        /* OUTPUT
        {
                "acknowledged" : true,
                "insertedId" : ObjectId("5eca20a5e62c414aaba11dbb")
        }
        */


/*Human Universe - Brian Cox, Andrew Cohen.
        This book has 3 variants- hardback at 1400, paperback at 400 and the e-book at 300. There are 10 copies of the hardback and 16 copies of the paperback.
        The publisher is William Collins and the book was printed in 2015.
        The description of the book is - "This book asks questions about our origins, our destiny and our place in the universe."
        It is classified under earth sciences, astrophysics, science, evolution. */

        db.bookstore_inventory.insertOne({
            name:"Human Universe",
            author:["Brian Cox", "Andrew Cohen"],
            publisher:"William Collins",
            publishing_year:2015,
            categories:["sciences","astrophysics","science","evolution"],
            description:"This book asks questions about our origins, our destiny and our place in the universe.",
            binding:{
                paperback:{
                    stock:16,
                    cost:400
                },
                hardback:{
                    stock:10,
                    cost:1400
                },
                ebook:{
                    cost:300
                }
            }
        })
        
        /*
        {
                "acknowledged" : true,
                "insertedId" : ObjectId("5eca2732e62c414aaba11dbc")
        }
        */