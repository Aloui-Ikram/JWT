const express =require("express");
const app = express();

app.use(express.json());
const users=[{
   id:"1",
   username:"ikram",
   password:"ikram2003",
   isAdmin :true,
},
{
   id:"2",
   username:"akram",
   password:"akram2003",
   isAdmin :false,
}  
];

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => {
      return u.username === username && u.password === password;
    });
    if (user) {
        //Generate an access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.json({
          username: user.username,
          isAdmin: user.isAdmin,
          accessToken,
          refreshToken,
        });
      } else {
        res.status(400).json("Username or password incorrect!");
      }
    });


app.listen(3000,function(req,res){
    console.log("backend server is running");
})