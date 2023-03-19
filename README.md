# Full-Stack Capstone Project

## Requirements / Features:
1. DesignanddevelopaRestfulAPIforthefront-endoftheproject.
2. DevelopanEntityRelationshipDiagram(ERD)tofacilitatethecreationofthe database by clearly stating the entities, their attributes, and their relationships. Make use of lucid chart to implement this.
3. CreateaPostmancollectionfortestingallyourendpointsandlaterdesigna comprehensive API Documentation based on the collection.
4. VersionyourAPIusingURLversioningstartingwiththeletter“v”.Asimple ordinal number would be appropriate. Avoid dot notation such as 2.5. An example of this will be https://somewebapp.com/api/v1/users
5. YoushouldrestrictunauthorizedusersfrommakingPOST,DELETE,andPATCH HTTP requests to all API endpoints.
6. WriteunittestsforyourAPIendpointsusingJestandSupertest.Testcoverage should be at least 70%
7. Set up a CI/CD (Continuous Integration / Continuous Deployment) pipeline using GitHub Actions.
8. EnsuretheAPIgetsdeployedtoHerokuthroughtheContinousDeployment workflow setup with GitHub Actions.
9. Ataminimum,youshouldhavethefollowingAPIendpointsworkingforeither one of the projects you choose to attempt.

## Endpoints 
<!-- Tables -->
| EndPoint     | Functionality          | Note |
| ------------ | -------------- | -------------- |
| POST => /users/signup     | Register a user | User added to the database should be unique to avoid duplication. |
| POST => /users/login     | Login a user | Should provide an access token in the response body. |
| POST/GET => /movies     | Add a new movie to the library or retrieve all movies. | The addition of new movies is reserved for authenticated users. |
| GET,PATCH,DELETE => /movies/:movieId     | Retrieve, update or delete a movie by it’s Id. | Updating and deleting a movie is reserved for authenticated users. |