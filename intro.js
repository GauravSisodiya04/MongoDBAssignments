//From Given Profile details, insert data into collection user_profiles
db.user_profiles.insertMany([
    {
        UserId:"amy01",
        Name:"Amy James",
        Location:"India",
        Gender:"Female",
        Age:19,
        University:"Delhi University"

    },
    {
        UserId:"jimmy999",
        Name:"Jim Watson",
        Location:"Mexico",
        From:"Canada",
        Office:"Google"
        
    },
    {
        UserId:"rachel_11",
        Name:"Rachel Green",
        Location:"New York",
        PhoneNo:+123456789,
        University:"Vassar University",
        Graduated:2014
        
    }
])

/* OUTPUT
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5eca07c18d2765089af0447f"),
                ObjectId("5eca07c18d2765089af04480"),
                ObjectId("5eca07c18d2765089af04481")
        ]
}
*/