import styled from 'styled-components';

export const NavDiv = styled.div`
display: flex;
min-width: 1200px ;
width: auto;
justify-content: space-between;
padding: 10px 35px;

.services{
    display: flex;
    justify-content: space-around;
    min-width: 40%;
    width: auto;
    
}
.user{
    display: flex;
    justify-content: space-around;
    min-width: 20%;
    width: auto;
}

li{
    list-style:none;
    position: relative;
    z-index: 1
}

li a {
    font-size: 16px;
    color: #19191a;
    margin-right: 42px;
    font-weight: 500;
    position: relative;
    
}

.selected{
        border-bottom: 1.5px solid tomato;
}

.register{
    background-color: tomato;
    border:none;
    border-radius: 5px;
    color: #ffffff;
    height: 1.5rem;
}

a{
    text-decoration: none;
    background-color: transparent;
}
`;

export const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
width: 100%;
height: 83vh;

.username{
    display: flex;
    justify-items: left;
}

input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=password], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 100%;
    background-color: tomato;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: tomato;
  }
  
  div {
    border-radius: 5px;
   
    padding: 20px;
  }

  a{
    color: tomato;
    font-size: .8rem;
  }

  .util{
      text-decoration: none;
  }
`;

export const RegisterDiv = styled.div`
display: flex;
height: 100vh;
min-width: 80px ;
width: 60%;
margin: 0 auto;
justify-content: space-between;


.introduction{
  width: 45%;
  padding: 5%;
  
}
.create{
  width: auto;
  text-align: left;
}

.business-summary{
  width: auto;
  text-align: justify;
}

.form-container{
  display:flex;
  height: 50%;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  align-items: center;
  width: 45%;
  padding: 5%;

}

.signup-form{
  width: 70%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=email], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: tomato;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.registered{
  text-align: center;
  width: auto;
}

.util{
  text-decoration: none;
}

a{
  color: tomato;
  font-size: .9rem;
}

`;

export const DashboardDiv = styled.div`
display: flex;
height: 100vh;
width: 100%;
.profile{
  width: 15%;
  border-right: 2px solid #f37b65;
}

.pages{
  width: 85%;
  background-color: #ffff;
}
`


export const DashboardLink = styled.div`
color: white;

ul li{
  margin-bottom: 10px;
  list-style: none;
}

.links{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  // padding-left: 10px;
}
.link-head{
  height: 15%;
  border-radius: 5px;
  margin: 5%;
  text-align: center;
  background-color: #f37b65;
  // border-radius: 5px;
  color: #ffffff;
  text-align: left;
}

h4{
  font-weight: lighter;
  padding-left: 1rem;
}

li{
  height: 10%;
}

a{
  text-decoration: none;
}


a:hover{
  color: #f37b65;
  padding: 10px;
}

.link-body{
  display: flex;
  height: 85%;
  margin-top: 3%;
  background-color: white;
  width: 95%;
}
`
export const UpdateProfileDiv = styled.div`
text-align: left;
.update-form{
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

input[type=file], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 20%;
  background-color: tomato;
  color: #ffffff;
  padding: 10px 10px;
  margin: 8px 0;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label{
  text-align: left;
  width: 100%;
}
`
export const TransactionDiv = styled.div`

`;
