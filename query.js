db.user_profiles.find(
    {$and:[
        {"Location":"New York"},
        {Graduated:{$gte:2013,$lte:2015}}
    ]
    }
).pretty()