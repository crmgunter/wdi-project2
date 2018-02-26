# wdi-project2

This app is meant for a real estate company to keep track of specific landlords' available properties and current leases. The users will be able to see each landlord's profile, their available properties, and their leases. Users, properties, and leases have full RESTful routes.

Properties and Leases are both nested in the User model. The idea is that when a user is on a user profile, they can access all properties and leases that are unique to that user profile. 

This app is technically responsive, but does not look good on a phone. Things are way too small so in the future I'd like to fix that issue. 

Also, I'd like to have something nested in the Lease model. For example, adding a tenants model so that when you are in leases and want to see more info on a specific tenant, you could click a tenant name and pull up a tenant profile with their information. 

I seem to have a bug on heroku as well. When the app is opened on heroku, two (seeded) users pop up in the user index page, but two empty images also pop up and I'm not sure why. I think I must be seeding some empty arrays or something. Not sure. Will try to figure that out.


# Link to Heroku 
https://sleepy-sierra-89764.herokuapp.com/

# Link to Github
https://github.com/crmgunter/wdi-project2

# Link to ERD and Wireframes
https://imgur.com/a/m35GL

# Updated Wireframe
https://imgur.com/a/BUWBe

# Link to Trello
https://trello.com/b/5DtIHLTo/wdi-project-2