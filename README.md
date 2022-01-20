# GraphQL-Server, using Bookstore dummy-data and MongoDB as a database.  
Important Notice: The Base Code for the Server is a modified and edited version of the GraphQL Tutorial found here: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f    
<br /><br />

**HOW TO TEST** (In Windows)
>Requirements

Having Downloaded Node.js (in order to use ***npm***)
<br />
>Follow Steps

1. clone the repository to a desired location of your PC, using the command in CMD: git clone repository_url (the repository url can be obtained from GitHub online clicking on the green Code Button)
2. After cloning is completed, open the cmd again and move to the repository directory that has been created. (***cd GraphQL-Server***)
3. Then, move to 'server' directory (***cd server***)
4. In this directory, run the commands one by one:

   i.  ***npm install express***
   
   ii. ***npm install -g nodemon***
   
   iii.***npm install lodash***
   
   iv. ***npm install mongoose***
   
   
5. that's all. to RUN THE SERVER, just run ***nodemon app*** and it should be doing good. (keep cmd open)
6. open a browser and on the top searchbar type : http://localhost:4000/graphql
7. To test the GraphQL server, try writing to the editor:
<pre>
{
  books{
    name
    id
    author{
      name
    }
  }
}
</pre>


or try some of the Queries from *Queries.txt*

