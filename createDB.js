/*...
..  Create a database called ConnectMeDB 
    Create a collection for their product catalog called user_profiles
..*/

use ConnectMeDB;
//OUTPUT--> switched to db ConnectMeDB
db.createCollection('user_profiles');
/* OUTPUT
{ "ok" : 1 }
*/